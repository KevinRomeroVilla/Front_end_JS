export const buildAdsView = (ads) => {

    const adsView = `
    <a href="http://localhost:8080/adsDetail.html?id=${ads.id}">
        <img src="${ads.image}" alt="">
        <p>${ads.name}</p>
        <p>${ads.description}</p>
        <p>${ads.price}</p>
        <p>${ads.condition}</p>
    </a>            
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
