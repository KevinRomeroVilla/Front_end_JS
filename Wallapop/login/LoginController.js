import { pubSub } from "../pubSub.js"
import { loginApiUser } from "./LoginProvider.js"

export class LoginController {
    constructor(nodeElement) {
        this.loginElement = nodeElement

        this.subscribeToEvents()
    }

    subscribeToEvents() {
        this.loginElement.addEventListener('submit', (event) => {
            event.preventDefault()
            this.loginUser()
        })

        const loginUserInputElements = Array.from(this.loginElement.querySelectorAll('input'))
        const loginUserButtonElement = this.loginElement.querySelector('#loginUserButton')

        loginUserInputElements.forEach(loginUserInputElement => {
            loginUserInputElement.addEventListener('input', () => {
                const areInputsFilled = loginUserInputElements.every(inputElement => inputElement.value)
                if(areInputsFilled) {
                    loginUserButtonElement.removeAttribute('disabled')
                } else {
                    loginUserButtonElement.setAttribute('disabled', '')
                }
            })
        })
    }

    async loginUser() {
        const formData = new FormData(this.loginElement)
        const username = formData.get('username')
        const password = formData.get('password')
        
        try {
            const jwt = await loginApiUser(username,password)
            localStorage.setItem('token', jwt)
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `Hubo un problema al momento de logear el usuario`)
        }
    }
}