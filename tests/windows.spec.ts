import {test, expect} from '@playwright/test'

test('Multiple windows handling', async ({page})=>{

    // const context = await browser.newContext()
    // const page = await context.newPage()
    await page.goto("https://demo.automationtesting.in/Windows.html")

   // const page1 = page.waitForEvent('popup')

    await page.getByRole('button', {name: 'click'}).click()
    const newPage  = await page.waitForEvent('popup')

   // const newPage = await page1

    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("h2.card-title").last()).toContainText("Support the Selenium Project")

    await page.getByRole('button', {name: 'click'}).click()
    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

    const count = await page.context().pages().length
    console.log(count)


})


