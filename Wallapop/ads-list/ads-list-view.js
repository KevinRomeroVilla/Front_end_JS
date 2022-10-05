export const buildAdsView = (ads) => {
    const formattedDate = new Date(ads.updatedAt);


    const adsView = `
    <a href="http://localhost:8080/tweetDetail.html?id=${ads.id}">
        <img src="${ads.image}" alt="">
        <p>${ads.name}</p>
        <p>${ads.description}</p>
        <p>${ads.price}</p>
        <p>${ads.condition}</p>
    </a>            
    `

    return adsView;
}

export const buildTweetListSpinner = () => {
    return `
    <div class="spinner"><div></div><div></div><div></div></div>
    `
}

export const buildEmptyAdsList = () => {
    return  `
    <h2>No hay anuncios disponibles.</h2>
    `
}
