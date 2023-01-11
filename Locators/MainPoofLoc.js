
class MailPoofLoc {

    static INPUT_FIELD_TOCREATE_XPATH = `//input[@name='email']`
    static CREATE_BUTTON_XPATH = `(//input[@value='Create'])[1]`
    static REFRESH_BUTTON_XPATH = `//div[@action='refresh']`
    static CURRENT_LETTER_XPATH = `(//div[@class='subject'][contains(text(),'Email confirmation')])[1]`
    static JOIN_BUTTON_XPATH = `//div[@id = 'tm-message']//a[.='Join now']`
}

module.exports = { MailPoofLoc }