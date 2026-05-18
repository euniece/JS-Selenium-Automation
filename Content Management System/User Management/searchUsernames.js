const {Builder, By, Key, util, until} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

//Function for Searching Multiple by usernames
async function searchUsernames(driver, usernames) {
  try {
    // Wait for the search input to appear
    const searchInput = await driver.wait(
      until.elementLocated(By.id('search')),
      5000
    );

    for (const username of usernames) { 

     //🔽 Automatically scroll ONLY if scrollbar exists
     //await autoScrollIfNeeded(driver, searchInput);

      // Clear any previous text
      //await searchInput.click();
      await searchInput.clear();
      await searchInput.sendKeys(Key.chord(Key.CONTROL, "a"), Key.BACK_SPACE);

      // Type the username and press Enter
      await searchInput.sendKeys(username, Key.RETURN);
      console.log(`Username "${username}" Entered`);

      // Wait for results to load (optional)
      await driver.sleep(5000);

      //Status:Inactive/Active button
      // Wait for results to load (optional)
      const switchElement = await driver.wait(
      until.elementLocated(By.xpath(`//tr[td[contains(text(),'${username}')]]//div[contains(@class,'v-switch')]//input[@type='checkbox']`)),
      10000
      );
      await switchElement.click();
      console.log(`Toggle to Inactive "${username}"`);

    }

  } catch (err) {
    console.error("Error searching usernames:", err);
  }
}

// Export the functions so they can be imported elsewhere
module.exports = {searchUsernames};