const { BasePage } = require('./BasePage');
const {MailPoofLoc} = require('../Locators/locators.js')


class CreateEmail extends BasePage {


    async openMailPoof(url) {
        await this.visit(url)
    }


    async enterEmailID(characters) {
        await this.type(MailPoofLoc.INPUT_FIELD_TOCREATE_XPATH, 10000, characters)
    }

    async clickOnCreateButton() {
        await this.click(MailPoofLoc.CREATE_BUTTON_XPATH, 10000)
    }

    async clickOnRefreshButton() {
        await this.click(MailPoofLoc.REFRESH_BUTTON_XPATH, 10000)
    }

    async findCurrentLetter() {
        this.driver.navigate().refresh();
        await this.find(MailPoofLoc.CURRENT_LETTER_XPATH, 50000)
    }

    async clickOnLetter() {
        await this.click(MailPoofLoc.CURRENT_LETTER_XPATH, 10000)
    }

    async findJoinButton() {
        let join = await this.find(MailPoofLoc.JOIN_BUTTON_XPATH, 10000)
        await this.driver.actions().move(join).press().perform()
    }

    async clickOnJoinButton() {
        await this.click(MailPoofLoc.JOIN_BUTTON_XPATH, 10000)
    }


}

module.exports = new CreateEmail()