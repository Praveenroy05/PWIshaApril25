import {test, expect} from '@playwright/test'

test("Shadow dom element handling", async ({page})=>{
    await page.goto("https://books-pwakit.appspot.com/explore?q=")
    await page.locator("#input").fill("Testing")
    await page.keyboard.press('Enter')
    await page.waitForTimeout(15000)
    await expect(page.locator("ul.books li").last()).toBeVisible()
})