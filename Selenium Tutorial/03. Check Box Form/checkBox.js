const {Builder, By, Key, util} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const driver = new Builder().forBrowser('chrome').build();

async function checkBxForm() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form");        
        await driver.findElement(By.xpath("//input[@id='name']")).sendKeys("My Name JRS");
        await driver.findElement(By.xpath("//input[@id='comment']")).sendKeys("Checkbox Form Example (Reservation)");
        await driver.findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
        
        //xpath //nb-checkbox[@value='breakfast']/label/span
        //xpath //input[@value='presidential-suite']/following::span
        //xpath //input[@id='name']
    } catch (error) {
        console.log(error);
    }
}


checkBxForm();