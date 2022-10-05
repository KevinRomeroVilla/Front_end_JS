import { sparrestApi } from "../SparrestApi.js";

export async function getAds() {
    const endPoint = `${sparrestApi.endPoints.ads}`
    const ads = await sparrestApi.get(endPoint)

    return ads
}