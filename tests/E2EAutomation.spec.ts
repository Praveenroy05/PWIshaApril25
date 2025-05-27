import {test, expect} from '@playwright/test'

const username :string  = "test7lYM@gmail.com"
const password = "Test@123"
const productName = "IPHONE 13 PRO"
const country = " Singapore"

test("E2E automation scenario", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client")
    await page.getByPlaceholder("email@example.com").fill(username)
    await page.getByPlaceholder("enter your passsword").fill(password)
    await page.getByRole('button', {name: 'Login', exact : true}).click() // Logins
    await expect(page.locator(".fa-sign-out")).toBeVisible()

    const products = await page.locator("div.card-body") // 3 different
    //waitFor() - 
    await products.last().waitFor({state:'visible'})
    // count the total number of products - count()
    const countOfProduct = await products.count() // 3 - 0,1,2

    for(let i = 0 ; i<countOfProduct; i++){
        const productText = await products.nth(i).locator("b").textContent() // div.card-body b
        if(productText === productName){
            await products.nth(i).locator('button').last().click()
            break
        }
    }

    await page.locator("[routerlink*='/cart']").click()
    await page.getByRole('button', {name: 'Checkout'}).click()
    await expect(page.locator("div.user__name input").first()).toHaveValue(username)
    // select the country
    await page.getByPlaceholder("Select Country").pressSequentially("in")
    await page.locator("section.ta-results").waitFor()
    const dropDownValues = page.locator("section.ta-results button")
    // count the count of the country
    const countOfCountry = await dropDownValues.count() // 10, 60, 37
   
    for(let i = 0 ; i<countOfCountry; i++){
        const countryName = await dropDownValues.nth(i).textContent()
        if(countryName === country){
            await dropDownValues.nth(i).click()
            break 
        }
    }

    await page.locator("a.action__submit").click()
    await expect(page.locator("h1.hero-primary")).toBeVisible()
    const orderID = await page.locator("label.ng-star-inserted").textContent()
    console.log(orderID)
    await page.locator("[routerlink='/dashboard/myorders']").first().click()
    await page.locator("tbody").waitFor()
    const rows = page.locator("tbody tr")
    const countOfRows = await rows.count()
    let ordertext
    for(let i = 0 ; i<countOfRows; i++){
        ordertext = await rows.nth(i).locator("th").textContent()
        if(orderID?.includes(ordertext)){
            rows.nth(i).locator("button").first().click()
            break
        }
    }
    await expect(page.locator("div.col-text")).toContainText(ordertext)
    



})