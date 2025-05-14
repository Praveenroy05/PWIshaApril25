import {test, expect} from '@playwright/test'


test("Handling alerts or popup", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    // waitForEvent('popup')
    // on()
    page.on('dialog', (dialog) =>{
        console.log(dialog.message())
        dialog.dismiss()
       // dialog.dismiss()
        // accept() 
        // dismiss() 
    })
    await page.locator("button#alertButton").click()
})

test("Handling Confirm alerts or popup", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    page.on('dialog', (dialog) =>{
    console.log(dialog.message());
    expect(dialog.message()).toContain("Do you confirm action?")
    dialog.dismiss()
    // dialog.dismiss()
    // accept() - OK
    // dismiss() - Cancel
    })

    await page.locator("button#confirmButton").click()
    await expect(page.locator("#confirmResult")).toContainText("You selected Cancel")

})

test("Handling Prompt alerts or popup", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    const text = "Testing"
    page.on('dialog', (dialog) =>{
    console.log(dialog.message());
    dialog.accept(text)
    // dialog.dismiss()
    // accept() - OK
    // dismiss() - Cancel
    })
    
    await page.locator("#promtButton").click()
    await expect(page.locator("#promptResult")).toContainText(`You entered ${text}`)

})