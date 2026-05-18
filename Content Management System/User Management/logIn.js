const {Builder, By, Key, util, until} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

//Function for Log In different Scenarios
async function LogInBTN(driver, logInn) {
  try {
    // Wait for the email input field to appear
    const searchInput = await driver.wait(
      until.elementLocated(By.id('email')),
      7000
    );

    for (const email1 of logInn) {
      // Clear any previous text
      await searchInput.clear();
      await searchInput.sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);

      // Type the emails and press Enter
      await searchInput.sendKeys(email1, Key.RETURN);
      console.log(`Emails "${email1}" Entered`);
      
    }
  } catch (err) {
    console.error("Error searching emails:", err);
  }
}


module.exports = {logIn};