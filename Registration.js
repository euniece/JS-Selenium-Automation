const {Builder, By, Key, util, until} = require ("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
async function registrationForm(params) {
        
        let options = new chrome.Options();
        options.addArguments('--start-maximized');
        let driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try{

        //Open Website
        await driver.get("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
        console.log("Website opened successfully");

        //Name xpath //*[@id="name"]
        await driver.wait(until.elementLocated(By.id('name')),10000)
        driver.findElement(By.id('name')).sendKeys('John Rovic');
        console.log("Name Entered");

        //Email xpath //*[@id="email"]
        await driver.wait(until.elementLocated(By.xpath('//*[@id="email"]')),10000)
        driver.findElement(By.xpath('//*[@id="email"]')).sendKeys('test_automation@email.com');
        console.log("Email Entered");

        //Locate radio button //*[@id="practiceForm"]/div[3]/div/div/div[1] | //*[@id="gender"]
        let genderBTN = await driver.wait(until.elementLocated(By.xpath("//*[@id='gender']")),10000);
        await genderBTN.click();
        console.log("Gender Selected");

        //Mobile Number xpath //*[@id="mobile"]
        await driver.wait(until.elementLocated(By.id('mobile')),10000)
        driver.findElement(By.id('mobile')).sendKeys('01234567897');
        console.log("Mobile Number Entered");
        
        //Date of Birth xpath //*[@id="dob"]
        await driver.wait(until.elementLocated(By.id('dob')),10000)
        //await dateInput.sendKeys("02/08/2026");
        driver.findElement(By.id('dob')).sendKeys('20/04/2000');
        console.log("Date of Birth Selected");

        //Subjects xpath //*[@id="subjects"]
        await driver.wait(until.elementLocated(By.id('subjects')),10000)
        driver.findElement(By.id('subjects')).sendKeys('Calculus, Data Structure and Algorithms, Physics, English, and Chemistry');
        console.log("Subjects Entered");

        //Locate checkbox buttons 
        // Sports checkbox (first one) //*[@id="hobbies"] using xpath
        await driver.wait(until.elementLocated(By.xpath("//*[@id='hobbies']")),10000)
        let sportsCbox = await driver.findElement(By.xpath("//*[@id='hobbies']"));
        await sportsCbox.click();
        console.log("Sports selected");

        // Reading checkbox (second)
        //*[@id="practiceForm"]/div[7]/div/div/div[2]/input using xpath
        await driver.wait(until.elementLocated(By.xpath("//*[@id='practiceForm']/div[7]/div/div/div[2]/input")),10000)
        let readCbox = await driver.findElement(By.xpath("//*[@id='practiceForm']/div[7]/div/div/div[2]/input"));
        await readCbox.click();
        console.log("Reading selected");

        // Music checkbox (Third)
        //*[@id='practiceForm']/div[7]/div/div/div[3]/input
        await driver.wait(until.elementLocated(By.xpath("//*[@id='practiceForm']/div[7]/div/div/div[3]/input")),10000)
        let musicCbox = await driver.findElement(By.xpath("//*[@id='practiceForm']/div[7]/div/div/div[3]/input"));
        await musicCbox.click();
        console.log("Music selected");

        //Upload Picture xpath //*[@id="picture"]
        // Wait until the element is present
        await driver.wait(until.elementLocated(By.id("picture")), 10000);
        // Find the element
        let uploadElement = await driver.findElement(By.id("picture"));
        // Scroll into view to ensure it's interactable
        await driver.executeScript("arguments[0].scrollIntoView(true);", uploadElement);
        // Upload the file (use double backslashes in Windows paths)
        await uploadElement.sendKeys("C:\\Users\\Euniece\\Downloads\\test_pic.jpg");

        console.log("Picture Uploaded");

        //Current Address xpath //*[@id="currentAddress"]
        //await driver.wait(until.elementLocated(By.id("currentAddress")), 10000);
        //let addressBox = await driver.findElement(By.id("currentAddress"));
        //await addressBox.sendKeys("4-2-8 Shibakoen, Minato-ku, Tokyo 105-0011, Japan");
        //console.log("Address Entered");

        // State Dropdown xpath //*[@id="state"]
        let stateDropdown = await driver.wait(until.elementLocated(By.id("state")),10000);
        await stateDropdown.click();

        // Now wait for the NCR option to appear //*[@id="state"]/option[2]
        let ncrOption = await driver.wait(until.elementLocated(By.xpath("//*[@id='state']/option[2]")),10000);

        // Click the NCR option
        await ncrOption.click();
        console.log("State Selected");

        // City Dropdown xpath //*[@id="city"]
        let cityDropdown = await driver.wait(until.elementLocated(By.id("city")),10000);
        await cityDropdown.click();

        // Now wait for the Lucknow option to appear //*[@id="city"]/option[3] 
        let lucknowOption = await driver.wait(until.elementLocated(By.xpath("//*[@id='city']/option[3]")),10000);

        // Click the Lucknow option
        await lucknowOption.click();
        console.log("City Selected");

        //Click Login xpath //*[@id="practiceForm"]/div[11]/input
        //const buttonElement = await driver.findElement(By.css('<button_element_css_selector>')); 
        await driver.wait(until.elementLocated(By.xpath('//*[@id="practiceForm"]/div[11]/input')),10000)
        const loginBTN = await driver.findElement(By.xpath('//*[@id="practiceForm"]/div[11]/input'));
        await loginBTN.click();
        console.log("Button Clicked");
    } 
    finally{
        await driver.sleep(10000);
        await driver.quit();
    }
}
registrationForm();