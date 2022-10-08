import { NotificationController } from "../notification/NotificationController.js";
import { pubSub } from "../pubSub.js";
import { CreateAdController } from "./CreateAdController.js";

document.addEventListener('DOMContentLoaded', () => {

    const checkUserLogged = () => {
        const token = localStorage.getItem('token');

        if (!token) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Intruso!')
            setTimeout(() => {
                window.location = '/login.html'
            }, 2000);
        }
    }

    const notificacionContainerElement = document.querySelector('.notificacion-container');
    const notificationController = new NotificationController(notificacionContainerElement);

    const createAdElement = document.querySelector('#create-ad-form');
    const createTweetController = new CreateAdController(createAdElement);

    checkUserLogged();
})