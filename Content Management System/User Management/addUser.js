const {Builder, By, Key, util, until} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

//Function for Adding Users
async function addUser(driver, addUsers,email, password) {
    
    try{
        //Add New User
        const addBTN = await driver.wait(
        until.elementLocated(By.xpath('//*[@id="inspire"]/div/main/div[2]/div[2]/button[2]')),
        7000);
        await driver.wait(until.elementIsVisible(addBTN), 7000);
        await addBTN.click();
        console.log("Add New User Button Clicked")
        
        // Wait for results to load (optional)
        await driver.sleep(2000);

        //User Status Radio Button
        
/*
        //Select Employee Name
        let empDropdown = await driver.wait(until.elementLocated(By.id("employee_name")),7000);
        await empDropdown.click();
        console.log("Employee Name Field Clicked");

        // Now wait for the employee option to appear
        let empName = await driver.wait(until.elementLocated(By.id("employee_name")),7000);
        await empName.sendKeys("JEFFREY FRIAS");
        console.log("Employee Name Typed");
        // Wait for results to load (optional)
        await driver.sleep(7000);
        
        let optionEmp = await driver.wait(
            until.elementLocated(By.id('employee_name')),7000);

        // Click the selected option
        await optionEmp.click();
        console.log("Employee Name Selected");

*/
      /*  
        const empInput = await driver.wait(until.elementLocated(By.id("employee_name")),7000);
        await empInput.click();
        //await empInput.clear();
        await empInput.sendKeys(addUsers, Key.ENTER);
        await driver.sleep(3000); 
        await empInput.click();
        console.log(`Employee "${addUsers}" selected`);
        */

/*
        //Employee Name
        const enterEmployee = await driver.wait(
        until.elementLocated(By.xpath("//div//input[@placeholder='Enter Employee Name']")),
        7000);
        await driver.sleep(3000); 
        await enterEmployee.click();
        await driver.sleep(3000); 
        await enterEmployee.sendKeys(addUsers, Key.ENTER);

        //Wait for the other fields to be populated
        await driver.sleep(3000); 

        await driver.wait(async () => {
        const displayed = await enterEmployee.isDisplayed();
        const enabled = await enterEmployee.isEnabled();
        return displayed && enabled;
        }, 7000);

        await enterEmployee.click();
        
        await driver.sleep(3000); 
        console.log(`Employee "${addUsers}" selected`);
        //Type the employee Name
        //await enterEmployee.sendKeys("Jeffrey Frias", Key.ENTER);
*/

        //Vue.js (v-autocomplete)
        const enterEmployee = await driver.wait(
        until.elementLocated(By.id("employee_name")),
        10000
        );

        await enterEmployee.click();
        await enterEmployee.clear();
        await enterEmployee.sendKeys(addUsers);

        const employeeOption = await driver.wait(
        until.elementLocated(
        By.xpath(`//div[contains(@class,'v-list-item-title') and normalize-space()='${addUsers}']`)
        ),
        10000
        );

        await employeeOption.click();

        console.log(`Employee "${addUsers}" selected`);

        //Enter email address
        const emailInput = await driver.wait(until.elementLocated(By.id('email')),7000)
        await emailInput.clear();
        await emailInput.sendKeys(email);
        console.log(`Email "${email}" entered`);

        //Wait for the other fields to be populated
        await driver.sleep(3000); 


        //Enter Password
        const passInput = await driver.wait(until.elementLocated(By.id('password')),7000)
        await passInput.clear();
        await passInput.sendKeys(password);
        console.log(`Password "${password}" entered`);

        //Click Show Password eye icon
        const eyeIcon = await driver.wait(
        until.elementLocated(By.xpath("//i[@aria-label=' appended action']")),
        10000
        );
        await driver.wait(until.elementIsVisible(eyeIcon), 7000);
        await eyeIcon.click();

        //Save Button
        const saveBTN = await driver.wait(until.elementLocated(By.xpath('//*[@id="inspire"]/div/main/div[2]/div/button[2]'),2000));
        await driver.wait(until.elementIsEnabled(saveBTN), 7000);
        await driver.wait(until.elementIsVisible(saveBTN), 7000);
        await saveBTN.click();
        console.log("Save Button Clicked")

    } 
    catch (err) {
        console.error("Error adding users:", err);
  }
}

// Export the functions so they can be imported elsewhere
module.exports = {addUser};