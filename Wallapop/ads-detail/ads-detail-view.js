export const buildAdsDetail = (ads) => {

    return`
    <img src="${ads.image}" alt="">
    <p>${ads.name}</p>
    <p>${ads.description}</p>
    <p>${ads.price}</p>
    <p>${ads.condition}</p>
    <button style="display: none">Borrar anuncio</button>
    `
}