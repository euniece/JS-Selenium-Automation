const {Builder, By, Key, util, until} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
async function LogIn(params) {
    
    let options = new chrome.Options();
    options.addArguments('--start-maximized');
    let driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try{

        //Open Website
        await driver.get("https://www.tutorialspoint.com/selenium/practice/text-box.php");
        console.log("Website opened successfully");

        //Fullname xpath //*[@id="fullname"]
        await driver.wait(until.elementLocated(By.id('fullname')),10000)
        driver.findElement(By.id('fullname')).sendKeys('John Rovic');
        console.log("Fullname Entered");

        //Email xpath //*[@id="email"]
        await driver.wait(until.elementLocated(By.xpath('//*[@id="email"]')),10000)
        driver.findElement(By.xpath('//*[@id="email"]')).sendKeys('test_automation@email.com');
        console.log("Email Entered");

        //Current Address xpath //*[@id="address"]
        await driver.wait(until.elementLocated(By.xpath('//*[@id="address"]')),10000)
        driver.findElement(By.xpath('//*[@id="address"]')).sendKeys('4-2-8 Shibakoen, Minato-ku, Tokyo 105-0011, Japan');
        console.log("Address Entered");
        
        //Password xpath //*[@id="password"]
        await driver.wait(until.elementLocated(By.id('password')),10000)
        driver.findElement(By.id('password')).sendKeys('test@Password123');
        console.log("Password Entered");

        //Click Submit xpath //*[@id="TextForm"]/div[5]/input 
        //const buttonElement = await driver.findElement(By.css('<button_element_css_selector>')); 
        const submitBTN = await driver.findElement(By.xpath('//*[@id="TextForm"]/div[5]/input')); 
        await submitBTN.click();
        console.log("Button Clicked");
    } 
    finally{
        await driver.sleep(5000);
        await driver.quit();
    }
}
LogIn();