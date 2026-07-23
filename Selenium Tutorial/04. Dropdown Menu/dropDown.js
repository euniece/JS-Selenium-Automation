const {Builder, By, Key, util} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const driver = new Builder().forBrowser('chrome').build();

async function drpDwnMenu() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form"); 
        

        //nb-select[@formcontrolname='select1']/button
        //nb-option[@value=1] -- first select
        const select2 = await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button"));
        select2.click();
        await driver.findElement(By.xpath("//nb-option[@value=1]")).click();
        await driver.findElement(By.xpath("//nb-option[@value=2]")).click();

        //
        //await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button")).click();
       

        await driver.findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click();
        await driver.findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click();
        await driver.findElement(By.xpath("//button[@id='submit']")).click();
        
        //xpath //nb-checkbox[@value='breakfast']/label/span
        //xpath //input[@value='presidential-suite']/following::span
        //xpath //nb-option[@value=1]
    } catch (error) {
        console.log(error);
    }
}


drpDwnMenu();