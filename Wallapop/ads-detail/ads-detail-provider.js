import { sparrestApi } from "../SparrestApi.js";

export const getAdsById = async (adsId) => {
    const ads = await sparrestApi.get(`${sparrestApi.endPoints.ads}/${adsId}`)

    return ads;
}

export const removeAdsById = async (adsId) => {
    await sparrestApi.delete(`${sparrestApi.endPoints.ads}/${adsId}`)
}