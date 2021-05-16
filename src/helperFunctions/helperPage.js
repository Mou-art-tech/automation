const assert = require ('assert');
const {clickElement} = require('../actions/click');
const {sendValue} = require('../actions/sendValue');
const {getTitleAttribute} = require('../actions/getAttribute');
const {googlePlayStoreTitle} = require('../constants');
const {searchBar, searchButton} = require('../locators/locator')


const helper = {

    validateUrl : async(homePageTitle , attributeName) => {
        let actualTitle =  await getTitleAttribute(homePageTitle , attributeName);
        assert.strictEqual(actualTitle
            , googlePlayStoreTitle, `${actualTitle} IS NOT MATCHING ${googlePlayStoreTitle}`);
    },

    selectSearchBox : async() => {
        await clickElement(searchBar);
    },

    typeText : async(searchText) => {
        await sendValue(searchBar, searchText);
    },

    selectSearchButton : async() => {
        await clickElement(searchButton);
        await browser.pause(5000);
    }
}

module.exports = helper;