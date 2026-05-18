const {Builder, By, Key, util, until} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

// Import functions from the other file
const {searchUsernames} = require("../User Management/searchUsernames");
const {searchEmails} = require("../User Management/searchEmails");
const {addUser} = require("../User Management/addUser");

//Main Function
async function cmsWeb(params) {
    //let driver = new Builder().forBrowser('chrome').build();
    
    const options = new chrome.Options();

    // Start Chrome maximized (adaptive for desktops/laptops)
    options.addArguments("start-maximized");

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try{
        //Open Website
        await driver.get("https://dmsuat-fe.gardenia.com.ph/");
        console.log("Website opened successfully");

        //Username //input[@id='email']
        await driver.wait(until.elementLocated(By.id("email")),7000)
        driver.findElement(By.id("email")).sendKeys('gardeniacmsdms1@yopmail.com');
        console.log("Username Entered");

        //Password //input[@id='password']
        await driver.wait(until.elementLocated(By.id("password")),7000)
        driver.findElement(By.id("password")).sendKeys('password123!');
        console.log("Password Entered");

        //Remember Me checkbox //input[@id='checkbox-4']
        // Wait until the checkbox element is present
        const checkbox = await driver.wait(
        until.elementLocated(By.id("checkbox-4")),7000);

        // Ensure the checkbox is visible
        //await driver.wait(until.elementIsVisible(checkbox), 7000);

        // Click the checkbox
        await checkbox.click();
        console.log("Checkbox Clicked");


        //Login button //button[contains(text(),'Log in')] //button[normalize-space(text())='Login']
        const LogInBTN = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="inspire"]/div/main/div/div/div/div/div[2]/div/form/div/button')),
        7000);
        await driver.wait(until.elementIsVisible(LogInBTN), 7000);
        await LogInBTN.click();
        console.log("Login Button Clicked")

        //Download CSV
        const dlBTN = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="inspire"]/div/main/div[2]/div[2]/button[1]')),
        7000);
        await driver.wait(until.elementIsVisible(dlBTN), 7000);
        await dlBTN.click();
        console.log("Download CSV Button Clicked")
        await driver.sleep(7000); 

        //Call the searchUsernames function and add usernames to search
        await searchUsernames(driver, [
            'jaypeji', 
            'bolanos', 
            'marksulat', 
            'raymondn']);
        await driver.sleep(7000);
        
        // Search by emails
        await searchEmails(driver, [
            'euniecenarvades@gardenia.com.ph', 
            'jerichotolentino@gardenia.com.ph', 
            'nicoleiwayan@gardenia.com.ph', 
            'yonduqagardenia@gmail.com'
        ]);
        
        await driver.sleep(7000);
        
        //Creation of User
        await addUser(driver,
            "ACE KASILAG",
            "euniecenarvades@gardenia.com.ph",
            "Gardenia@123"
        );

        await driver.sleep(7000);
        
        //Navaigation to User Roles
        const userMgmnt = await driver.wait(
          until.elementLocated(
          By.xpath('//*[@id="inspire"]//nav//a[2]')
        ),
        10000
        );
        await driver.wait(until.elementIsVisible(userMgmnt), 7000);
        await userMgmnt.click();
        console.log("User Roles Clicked")

        await driver.sleep(7000);
        
        //Click Logout
        const logOut = await driver.wait(
          until.elementLocated(
          By.xpath("//div[contains(@class,'v-list-item') and .//div[text()='Logout']]")
        ),
        10000
        );
        await driver.wait(until.elementIsVisible(logOut), 7000);
        await logOut.click();
        console.log("Logout Clicked")
        await driver.sleep(7000);
        //Click Logout
        const logOBTN = await driver.wait(
          until.elementLocated(
          By.xpath("//button[contains(@class,'proceed-btn') and .//span[normalize-space()='Yes']]")
        ),
        10000
        );
        await driver.wait(until.elementIsVisible(logOBTN), 7000);
        await logOBTN.click();
        console.log("Yes Button Clicked")
    } 
    finally{
        await driver.sleep(2000);
        await driver.quit();
        console.log("Browser closed");
    }
}
cmsWeb();