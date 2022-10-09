import { pubSub } from "../pubSub.js"
import { createApiUser, loginApiUser } from "./SignUpProvider.js"

export class SignUpController {
    constructor(nodeElement) {
        this.signUpElement = nodeElement

        this.subscribeToEvents()
    }

    subscribeToEvents() {
        this.signUpElement.addEventListener('submit', (event) => {
            event.preventDefault()
            this.validatePassword()
        })

        const createUserInputElements = Array.from(this.signUpElement.querySelectorAll('input'))
        const createUserButtonElement = this.signUpElement.querySelector('#createUserButton')

        createUserInputElements.forEach(createUserInputElement => {
            createUserInputElement.addEventListener('input', () => {
                const areInputsFilled = createUserInputElements.every(inputElement => inputElement.value)
                if(areInputsFilled) {
                    createUserButtonElement.removeAttribute('disabled')
                } else {
                    createUserButtonElement.setAttribute('disabled', '')
                }
            })
        })
    }

    validatePassword() {
        const passwordElement = this.signUpElement.querySelector('#password')
        const minLength = 6;

        if(passwordElement.value.length <= minLength) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `La contraseña debe tener más de ${minLength} caracteres`)
        }

        const regExp = new RegExp(/^[a-zA-Z0-9]*$/)

        if (regExp.test(passwordElement.value)) {
            //hacemos cosas
            this.createUser()
        } else {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `La contraseña debe tener minusculas,mayusculas o números`)
        }
    }

    async createUser() {
        const formData = new FormData(this.signUpElement)
        const username = formData.get('username')
        const password = formData.get('password')
        
        try {
            await createApiUser(username, password)
            //login 
            const jwt = await loginApiUser(username,password)
            localStorage.setItem('token', jwt)
            alert("Creación y logeo de manera correcta")
            setTimeout(() => {
                window.location = '/index.html'
            }, 2000);
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `Hubo un problema al momento de crear el usuario`)
        }
    }
}