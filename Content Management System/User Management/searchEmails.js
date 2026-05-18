const {Builder, By, Key, util, until} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

//Function for Searching Multiple by email
async function searchEmails(driver, emails) {
  try {
    // Wait for the search input to appear
    const searchInput = await driver.wait(
      until.elementLocated(By.id('search')),
      7000
    );

    for (const email1 of emails) {
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


// Export the functions so they can be imported elsewhere
module.exports = {searchEmails};
