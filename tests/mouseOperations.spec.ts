//click, double click, right click, mouse hover and drag and drop

import {test, expect} from '@playwright/test'

test("Handling double click and right click", async ({page})=>{
    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    // double click - dblClick()

    await page.getByText("Double-Click Me To See Alert").dblclick()
    // right click - click({button: 'right'})
    await page.getByText("right click me").click({button : 'right'})
    await page.getByText("Delete").last().click()

    // dialog - alert or pop-up - We can also handle it manually 
})

test("Hover over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")
    // hover() - Hover over the matching element.
    await page.getByText("Add-ons", {exact : true}).hover()
    await expect(page.getByTestId("test-id-Visa Services")).toBeVisible()

    //https://webdriveruniversity.com/Popup-Alerts/index.html
})