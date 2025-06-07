//POM - Page Object Model

// Page object model is a design pattern used in the software testing to represent a web page as an object. It is a way to organise and manage the interaction with a web page by creating classes which encapsulate properties(variable) and behaviour(methods) of that page.


// Each page object class typically contains methods for interactions with the elements typing, clicking, getting the text. It approach promotes, resuability, reduceing the code duplication, maintainces as well will be easy.

// POM from scratch

// Layers - 
// 1. Page Layer
// 2. Test Layer
// 3. Test Data Layer
// 4. Utility
// 5. Reporting

// 1. Page Layer - Will create a package/folder (pages) - Locators and methods related to specific

// basepage.ts
// LoginPage.ts, DashboardPage.ts, CartPage.ts .....
// validLogin(), invalidLogin(), validateForgetPassword(), registration()
// viewProductDetails(), searchAndAddTheProductToCart()

// 2. Test Layer - (tests) folder - Pure test cases and assertions
// LoginPage.e2e.spec.ts, DashboardPageTest.spec.ts, ....

// 3. Test Data - JSON/Excel/Constant 

// 4. Utils - ELementsUtils.ts - , getting the data from excel, screenshot(), scrolldown()

/* clickElement(locator){
    logger......
    ("Waiting for element")
    locator.click()
    {"click on element ", locator}
}
*/






