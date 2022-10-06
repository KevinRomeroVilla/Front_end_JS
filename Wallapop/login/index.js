import { NotificationController } from "../notification/NotificationController.js"
import { LoginController } from "./LoginController.js"

document.addEventListener('DOMContentLoaded', () => {
    const loginUserElement = document.querySelector('.Login-user-form')
    const notificationElement = document.querySelector('.notification')

    const signUpController = new LoginController(loginUserElement)
    const notificationController = new NotificationController(notificationElement)
})