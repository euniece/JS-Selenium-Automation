const {Builder, By, Key, util} = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const options = new chrome.Options();
options.addArguments('--user-data-dir=C:\\Users\\Euniece\\JS Selenium\\Selenium-Training');
options.addArguments('--profile-directory=Selenium Profile');

/*
// Set Chrome preferences for downloads
options.setUserPreferences({
  "download.default_directory": "C:\\Users\\Euniece\\JS Selenium\\Selenium-Training\\Downloads",
  "download.prompt_for_download": false,
  "profile.default_content_settings.popups": 0, //prevent pop-up
  "safebrowsing.enabled": true
});
*/

const driver = new Builder().forBrowser('chrome').setChromeOptions(options).build();

driver.get("http://www.google.com");