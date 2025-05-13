import {test, expect} from '@playwright/test'

// Enter the value inside the input fiels
// Assert the value have been entered or not
// Radio button /Checkbox
// Assert the radio/checkbox have been selected or not


test("UI Basics", async function({page}){
    // Launch the url - goto(URl in the form of string)
    await page.goto("https://demoqa.com/automation-practice-form")
    // Enter the text value - fill()
    await page.getByPlaceholder('First Name').fill("Test")
    await expect(page.getByPlaceholder('First Name')).toHaveValue("Test")

    // locator() - which will help in the idetifying the element on the webpage
    await page.locator("#lastName").fill("Playwright")
    await expect(page.locator("#lastName")).toHaveValue("Playwright")

    // pressSequentially() - In entering text value character by character


    // 3rd place
    // first() - Returns locator to the first matching element
    // last() - Returns locator to the last matching element.
    // nth(index) - Returns locator to the n-th matching element. It's zero based
    await page.locator("input.mr-sm-2").nth(2).pressSequentially("email@gmail.com")

    // radio /checkbox  - click(), check()
    // click() - Clicks the element
    await page.locator("[value='Female']").click({force: true})
    await expect(page.locator("[value='Female']")).toBeChecked()

    await page.locator("#hobbies-checkbox-1").check({force: true})
    await expect(page.locator("#hobbies-checkbox-1")).toBeChecked()

    await page.locator("#hobbies-checkbox-1").uncheck({force: true})
    await expect(page.locator("#hobbies-checkbox-1")).not.toBeChecked({timeout : 30000})

    


})
