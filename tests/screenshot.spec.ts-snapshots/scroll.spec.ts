import {test, expect} from '@playwright/test'


test("Scroll down", async ({page})=>{
    await page.goto("https://playwright.dev/docs/locators")
    await page.locator("div.pagination-nav__sublabel").last().scrollIntoViewIfNeeded()
     await page.locator("div.pagination-nav__sublabel").last().click({force: true})
     await expect(page.locator("header h1")).toContainText("Mock APIs")
})