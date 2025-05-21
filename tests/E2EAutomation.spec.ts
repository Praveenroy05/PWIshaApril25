import {test, expect} from '@playwright/test'

const username :string  = "test7lYM@gmail.com"
const password = "Test@123"
const productName = "IPHONE 13 PRO"

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
    




})