import { NotificationController } from "../notification/NotificationController.js"
import { SignUpController } from "./SignUpController.js"

document.addEventListener('DOMContentLoaded', () => {
    const createUserElement = document.querySelector('.Create-user-form')
    const notificationElement = document.querySelector('.notification')

    const signUpController = new SignUpController(createUserElement)
    const notificationController = new NotificationController(notificationElement)
})