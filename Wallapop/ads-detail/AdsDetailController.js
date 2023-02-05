import { pubSub } from "../pubSub.js"
import { decodeToken } from "../utils/decodeToken.js"
import { getAdsById, removeAdsById } from "./ads-detail-provider.js"
import { buildAdsDetail } from "./ads-detail-view.js"

export class AdsDetailController {

    constructor(nodeElement) {
        this.adsDetailElement = nodeElement
    }

    async drawAdsDetail(adsId) {
        try {
            const ads = await getAdsById(adsId)
            this.ads = ads
            this.adsDetailElement.innerHTML = buildAdsDetail(ads)
            this.drawRemoveButton()
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error obteniendo el anuncio')
        }
    }

    drawRemoveButton() {
        // el usuario ha hecho login
        const token = localStorage.getItem('token');

        if(token) {
            // el usuario logado es el creador del anuncio que estamos viendo
            const tokenData = decodeToken(token);

            if (tokenData.userId === this.ads.userId) {
                const removeButton = this.adsDetailElement.querySelector('button');
                removeButton.style.display = 'block';
                removeButton.addEventListener('click', () => this.removeAds())
            }
            
        }
    }

    async removeAds() {
        const response = window.confirm('¿seguro que quieres borrar el tweet?');
        if (response) {
            try {
                await removeAdsById(this.ads.id)
                alert('anuncio borrado exitosametne')
                window.location = '/'     
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error borrando el anuncio')
            }
        }
    }

}