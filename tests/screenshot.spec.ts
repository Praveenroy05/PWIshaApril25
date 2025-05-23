import {test, expect} from '@playwright/test'


test("Take the screenshot", async ({page})=>{
    // Full page screenshot
    await page.goto("https://playwright.dev/docs/locators")
    // screenshot({path : "screenshot/fullpage.png"})
    await page.screenshot({path: 'screenshot/fullpage.png'})
    await page.screenshot({path: 'screenshot/completepage.png', fullPage :true})

    await page.locator("header h1").screenshot({path: 'screenshot/partialscreenshot.jpeg'})
})



test("Visual Testing", async ({page})=>{
    await page.goto("https://www.flightaware.com/")
    // toMatchScreenshot()
    await expect(await page.screenshot()).toMatchSnapshot("flight.png")

})