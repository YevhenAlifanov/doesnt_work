const { BasePage } = require('./BasePage')
const signUpLocators = require('../Locators/locators.js')

class SignUp extends BasePage{

    async loadAimchatPage(url){
        await this.visit(url)
    }

    async sendRequestLinkClick(){
        await this.click(signUpLocators.sendRequestButton, 5000)
    }

    async getForgotYourPassword(){
        return await this.getAttributeText(signUpLocators.forgotYourPassword, 5000)
    }

    async getElementText(locatorPath, timeout=5000){
        return await this.getElementText(locatorPath, timeout);
    }

    async clickSignInButton(){ // TODO add sign in locator
        await this.click(signUpLocators.signUpButton, 5000)
    }

    async loadAimchatPage(url){
        await this.visit(url)
    }

    async sendRequestLinkClick(){
        await this.click(signUpLocators.sendRequestButton, 10000)
    }

    async getForgotYourPassword(){
        return await this.getAttributeText(SingInLocators.FORGOT_YOUR_PASSWORD_XPATH, 30000)
    }

    async fillLoginField(character){
        return  await this.type(signUpLocators.loginField, 10000, character)
    }

    async fillPassword(character){
        return await this.type(signUpLocators.passwordField, 10000, character)
    }

    async clickSignInButton(){
        await this.click(signUpLocators.SING_IN_BUTTON_XPATH, 10000)
    }

    async getIncorrectPassword(){
        return await this.getElementText(SingInLocators.ERROR_PASSWORD_EXPATH, 10000)
    }
    async getIncorrectLogIn(){
        return await this.getElementText(SingInLocators.ERROR_LOGIN_EXPATH, 10000)
    }


}

module.exports = new SignUp()