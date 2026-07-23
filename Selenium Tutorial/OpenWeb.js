const {Builder, By, Key, util} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const driver = new Builder().forBrowser('chrome').build();

async function TestWeb() {
   

//Open Website
    try{
        await driver.get("https://testautomationpractice.blogspot.com")
        //await driver.sleep(5000);
    } 
   /* finally{
        await driver.quit();
    }*/
    
    catch (error){
        console.log(error);
    }


}
TestWeb();