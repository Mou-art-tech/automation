const { Given, When, Then } = require('@cucumber/cucumber');
const {launchUrl} = require("../actions/launchUrl");
const constants = require("../constants");
const helper = require('../helperFunctions/helperPage');
const {homePageTitle} = require('../locators/locator');



When(/^I have launched (.*) website$/, async(website)=> {
    await launchUrl(constants[website]); 
    await helper.validateUrl(homePageTitle , "constants[title]"); 
});

When(/^I click on searchBar$/, async()=> {
    await helper.selectSearchBox();
});

When(/^I enter (.*) in the searchbar$/, async(searchText)=> {
    await helper.typeText(searchText);
});

When(/^I click the search Button$/, async()=> {
    await helper.selectSearchButton();
})





    // const searchbox = await $('.gLFyf.gsfi');
    // await searchbox.click();
    // await searchbox.setValue('Hello');
    
    // const searchButton = await $('.gNO89b');
    // await searchButton.click();
    // await browser.pause(5000);
    
    // const text =  await $("//*[ text() = 'Adele - Hello - YouTube' ]");
    //     const title = await text.getText();
    //  expect(browser).toHaveTitle('hello - Google Search');


