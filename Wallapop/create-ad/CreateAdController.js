import { createApiAd } from "./CreateAdProvider.js";

export class CreateAdController {
    constructor(nodeElement) {
        this.createAdElement = nodeElement

        this.subscribeToEvents()
    }

    subscribeToEvents() {
        const createAdButton = this.createAdElement.querySelector('.create-ad-button')

        this.createAdElement.addEventListener('submit', (event) => {
            event.preventDefault();
        })

        const createAdInputElements = Array.from(this.createAdElement.querySelectorAll('.obigatorio'))
        const createAdButtonElement = this.createAdElement.querySelector('.create-ad-button')

        createAdInputElements.forEach(createAdInputElement => {
            createAdInputElement.addEventListener('input', () => {
                const areInputsFilled = createAdInputElements.every(inputElement => inputElement.value)
                if(areInputsFilled) {
                    createAdButtonElement.removeAttribute('disabled')
                } else {
                    createAdButtonElement.setAttribute('disabled', '')
                }
            })
        })


        createAdButton.addEventListener('click', () => {
            this.createAd()
        })
    }

    createAd() {
        const formData = new FormData(this.createAdElement)
        const Nombre_producto = formData.get('Nombre_producto');
        const Descripción_producto = formData.get('Descripción_producto');
        const Precio_producto = formData.get('Precio_producto');
        const compra_o_venta = formData.get('compra_o_venta');
        createApiAd(Nombre_producto, Descripción_producto, Precio_producto, compra_o_venta)
    }
}