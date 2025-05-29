import {test, expect, request} from '@playwright/test'
import { getToken, orderProduct } from '../ApiUtils/apiutils'

const loginPayload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}
const orderPayload = {orders: [{country: "Australia", productOrderedId: "67a8df1ac0d3e6622a297ccb"}]}


let token
let orderID 
test.beforeAll("Get the token and orderID", async ()=>{
    const apiContext  = await request.newContext()
    token = await getToken(apiContext, loginPayload)
    orderID = await orderProduct(apiContext, token, orderPayload)

})

test("E2E automation using web and api", async ({page})=>{

    // addInitScript(function(arg), value)

    await page.addInitScript((value) =>{
        window.localStorage.setItem('token', value)
    }, token)

    await page.goto("https://rahulshettyacademy.com/client")
    await expect(page.locator(".fa-sign-out")).toBeVisible()
    console.log(orderID);
    
   /*
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
    */
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