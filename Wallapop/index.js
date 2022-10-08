import { AdsListController } from "./ads-list/AdsListController.js";
import { NotificationController } from "./notification/NotificationController.js";

document.addEventListener('DOMContentLoaded', () => {
    const createController = () => {
        const adsListElement = document.querySelector('#ads-list');
        const notificationElement = document.querySelector('#notification')
    
        const notificationController = new NotificationController(notificationElement)
        const adsListController = new AdsListController(adsListElement)
    }

    const handleUserLogged = () => {
        const token = localStorage.getItem('token')
        const userActions = document.querySelector('#user-actions')
        if (token) {
            userActions.innerHTML = '<a href="/createAd.html">Crear Anuncio</a>'
        } else {
            userActions.innerHTML = `
            <a href="/signup.html">Signup</a>
            <a href="/login.html">Login</a>
            `
        }
    }

    createController();
    handleUserLogged();
})