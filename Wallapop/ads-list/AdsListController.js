import { pubSub } from "../pubSub.js";
import { getAds } from "./ads-list-provider.js";
import { buildAdsView, buildEmptyAdsList, buildAdsListSpinner } from "./ads-list-view.js";

export class AdsListController {

    constructor(nodeElement) {
        this.adsContainerElement = nodeElement;
        

        this.loadAds()
    }

    async loadAds() {
        this.adsContainerElement.innerHTML = buildAdsListSpinner()
        let ads = [];

        try {
            ads = await getAds();
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error cargando anuncios')
        }


        if (ads.length === 0) {
            this.showAdsNotFound()
        }

        //spinnerElement.remove();
        this.adsContainerElement.querySelector('.spinner').classList.toggle('hide')
    
        this.drawAds(ads)
    }

    showAdsNotFound() {
        const divElement = document.createElement('div');
        divElement.innerHTML = buildEmptyAdsList()
        this.adsContainerElement.appendChild(divElement)
    }

    drawAds(ads) {
        for (const ad of ads) {
            const articleElement = document.createElement('article');
        
            articleElement.innerHTML = buildAdsView(ad)
        
            this.adsContainerElement.appendChild(articleElement);
        } 
    }

}