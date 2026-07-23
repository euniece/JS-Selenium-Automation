const {Builder, By, Key, util} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const driver = new Builder().forBrowser('chrome').build();

async function simpleRegistration() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");        
        await driver.findElement(By.id("email")).sendKeys("jrs0420@example.com");
        await driver.findElement(By.id("password")).sendKeys("jrs0420.com");
        await driver.findElement(By.name("submit")).click();

    } catch (error) {
        console.log(error);
    }
}


simpleRegistration();