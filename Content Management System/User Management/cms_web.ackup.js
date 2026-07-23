const {Builder, By, Key, util, until} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

//Function for Searching Multiple by usernames
async function searchUsernames(driver, usernames) {
  try {
    // Wait for the search input to appear
    const searchInput = await driver.wait(
      until.elementLocated(By.id('search')),
      10000
    );

    for (const username of usernames) {
      // Clear any previous text
      await searchInput.clear();
      await searchInput.sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);

      // Type the username and press Enter
      await searchInput.sendKeys(username, Key.RETURN);
      console.log(`Username "${username}" Entered`);

      // Wait for results to load (optional)
      await driver.sleep(5000);
    }
  } catch (err) {
    console.error("Error searching usernames:", err);
  }
}

//Function for Searching Multiple by email
async function searchEmails(driver, emails) {
  try {
    // Wait for the search input to appear
    const searchInput = await driver.wait(
      until.elementLocated(By.id('search')),
      10000
    );

    for (const email1 of emails) {
      // Clear any previous text
      await searchInput.clear();
      await searchInput.sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);

      // Type the emails and press Enter
      await searchInput.sendKeys(email1, Key.RETURN);
      console.log(`Emails "${email1}" Entered`);

      // Wait for results to load (optional)
      await driver.sleep(5000);
    }
  } catch (err) {
    console.error("Error searching emails:", err);
  }
}

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
        await driver.wait(until.elementLocated(By.id("email")),10000)
        driver.findElement(By.id("email")).sendKeys('gardeniacmsdms1@yopmail.com');
        console.log("Username Entered");

        //Password //input[@id='password']
        await driver.wait(until.elementLocated(By.id("password")),10000)
        driver.findElement(By.id("password")).sendKeys('password123!');
        console.log("Password Entered");

        //Remember Me checkbox //input[@id='checkbox-4']
        // Wait until the checkbox element is present
        const checkbox = await driver.wait(
        until.elementLocated(By.id("checkbox-4")),10000);

        // Ensure the checkbox is visible
        //await driver.wait(until.elementIsVisible(checkbox), 5000);

        // Click the checkbox
        await checkbox.click();
        console.log("Checkbox Clicked");


        //Login button //button[contains(text(),'Log in')] //button[normalize-space(text())='Login']
        const LogInBTN = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="inspire"]/div/main/div/div/div/div/div[2]/div/form/div/button')),
        10000);
        await driver.wait(until.elementIsVisible(LogInBTN), 5000);
        await LogInBTN.click();
        console.log("Login Button Clicked")

        //Search VSM by username  one by one and email add //input[@id='search']
        //const searchBTN = await driver.wait(
        //until.elementLocated(By.id('search')),10000);    
        //driver.findElement(By.id("search")).sendKeys('jaypeji');
        //console.log("Username Entered");

        //Call the searchUsernames function and add usernames to search
        await searchUsernames(driver, ['jaypeji', 'bolanos', 'marksulat', 'raymondn']);
        await driver.sleep(2000);
        await searchEmails(driver, [
            'euniecenarvades@gardenia.com.ph', 
            'jerichotolentino@gardenia.com.ph', 
            'nicoleiwayan@gardenia.com.ph', 
            'yonduqagardenia@gmail.com'
        ]);



        //Download CSV
        
    } 
    finally{
        await driver.sleep(5000);
        await driver.quit();
    }
}
cmsWeb();