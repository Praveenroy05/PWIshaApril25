// Frames
// Step by step

// Launch the url - main page - page.goto()
// Actions on the main page - page.locator()
// Write the locator to identify the frames - const framePage = page.frameLocator()
// framePage -  


import {test, expect} from '@playwright/test'

test('Handling frames', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect(page.getByPlaceholder("Hide/Show Example")).toBeHidden()

    const framePage = page.frameLocator("#courses-iframe")
    await framePage.getByText("All Access plan", {exact:true}).first().click()
    await expect(framePage.locator("div.inner-box h1")).toBeVisible()

    await page.locator("[name='checkBoxOption1']").click()
    await expect(page.locator("[name='checkBoxOption1']")).toBeChecked()

})