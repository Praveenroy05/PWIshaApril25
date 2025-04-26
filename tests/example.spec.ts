import {test, expect} from '@playwright/test'

let abc;


// launch the browser

// fixture - setup and teardown
// browser and page

test('Title of the test case', async function({browser}){

  // launch the browser - 
  const context = await browser.newContext() // Create a new browser context
  const page = await context.newPage()

  await page.goto("https://google.com")
})

test('Title of the test case1', async function({page}, ){
  await page.goto("https://google.com")

})


