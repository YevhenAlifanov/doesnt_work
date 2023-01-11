const { BasePage } = require('./BasePage')
const { MainLoc } = require('../Locators/locators.js')

class MainPage extends BasePage {


    async getGeneralRoomTitle() {
        return await this.getElementText(MainLoc.GeneralRoom, 10000)
    }
}

module.exports = new MainPage();