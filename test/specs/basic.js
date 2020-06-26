const {expect} = require("chai");
const login = require("../login");

describe("Create delivery",() => {
    before(() => {
        login();
    })

    it('should verify that  USPS logo is displayed', function () {
        const orderBtn = $('#usps-logo');
        const result = orderBtn.isDisplayed();
        expect(result).true;
    });
    it('should select language', function () {
        const languageDropDown = $('#slanguage');
        languageDropDown.selectByVisibleText('Español');
        // browser.pause(1000);
    });
    it('should select language', function () {
        const languageDropDown = $('#slanguage');
        languageDropDown.selectByVisibleText('Inglés');
        // browser.pause(1000);
    });
    it('should input Username ', function () {
        login();
        const userName = $('#tuserName');
        userName.setValue('User666');
        // browser.pause(1000);
    });
    it('should input password', function () {
        const password = $('#tPassword');
        password.setValue('123456789OK');
        // browser.pause(1000);
    });
    it('should input password', function () {
        const password = $('#tPasswordRetype');
        password.setValue('123456789OK');
        browser.pause(1000);
    });
    it('should choose first question', function () {
        const firstQuestion = $('#ssec1');
        firstQuestion.selectByVisibleText('In what city were you born?');
    });
    it('should verify that first question is selected', function () {
        const firstQuestion = $('#o1');
        firstQuestion.scrollIntoView();
        const result = firstQuestion.isSelected();
        expect(result).true;
        // browser.pause(3000);
    });
    it('should input answer for first question', function () {
        const answerFld = $('#tsecAnswer1');
        answerFld.setValue('Tomsk');
    });
    it('should choose second question', function () {
        const secondQuestion = $('#ssec2');
        secondQuestion.selectByVisibleText('What is your favorite movie?');
    });
    it('should verify that second question is selected', function () {
        const secondQuestion = $('#s2o5');
        const result = secondQuestion.isSelected();
        expect(result).true;
        browser.pause(3000);
    });

})
