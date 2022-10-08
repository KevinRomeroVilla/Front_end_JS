import { NotificationController } from "../notification/NotificationController.js";
import { AdsDetailController } from "./AdsDetailController.js";

document.addEventListener('DOMContentLoaded', () => {

    const adsDetailContainerElement = document.querySelector('.ads-detail-container');
    const notificationContainerElement = document.querySelector('.notification-container');

    const params = new URLSearchParams(location.search)
    const adsId = params.get('id')

    const adsDetailController = new AdsDetailController(adsDetailContainerElement)
    adsDetailController.drawAdsDetail(adsId)
    const notificationController = new NotificationController(notificationContainerElement)
})