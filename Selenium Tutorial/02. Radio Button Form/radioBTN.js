const {Builder, By, Key, util} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const driver = new Builder().forBrowser('chrome').build();

async function radioBTNForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");        
        await driver.findElement(By.css('#title')).sendKeys("Radio Button Form Example");
        await driver.findElement(By.css('#description')).sendKeys("Radio Button Form Example | Selenium Javascript Automation");
        await driver.findElement(By.css('div:nth-child(2) > label > span.custom-control-indicator')).click();
        await driver.findElement(By.css('#submit')).click();
    
    } catch (error) {
        console.log(error);
    }
}


radioBTNForm();