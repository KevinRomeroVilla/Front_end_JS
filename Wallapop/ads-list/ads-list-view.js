export const buildAdsView = (ads) => {

    const adsView = `
    <div class="centrar">
    <a href="http://localhost:8080/adsDetail.html?id=${ads.id}">
        <img src="${ads.image}" alt="" class="mediana">
        <p class="letra">${ads.name}</p>
        <p class="letra">${ads.description}</p>
        <p class="letra">${ads.price}</p>
        <p class="letra">${ads.condition}</p>
    </a>
    </div>          
    `

    return adsView;
}

export const buildAdsListSpinner = () => {
    return `
    <div class="spinner"><div></div><div></div><div></div></div>
    `
}

export const buildEmptyAdsList = () => {
    return  `
    <h2>No hay anuncios disponibles.</h2>
    `
}
