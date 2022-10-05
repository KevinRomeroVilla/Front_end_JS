import { AdsListController } from "./ads-list/AdsListController.js";
import { NotificationController } from "./notification/NotificationController.js";

document.addEventListener('DOMContentLoaded', () => {
    const adsListElement = document.querySelector('#ads-list');
    const notificationElement = document.querySelector('#notification')

    const notificationController = new NotificationController(notificationElement)
    const adsListController = new AdsListController(adsListElement)
})