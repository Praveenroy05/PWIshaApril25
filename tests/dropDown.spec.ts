// Drop down
// 2 Types - 
// Single select and Multi select

// 1. static DD - 
// 2. dynamic DD - 

// 1. <select></select>
// 2. non select  - div, li, ul, span


// 1. DD developed using select tag - 
// Step by step
// Locate the drop down element
// get the options from the DD by using - selectOption(value), label, index) - selectOption([1,2,3])


// 2. DD developed using non-select tag
// Step by step
// Locate the drop down element
// Click on the drop down to open the DD
// Locate the element that we want to select and click on that specific element


import {test, expect} from '@playwright/test'

test('Drop down developed using select tag', async function({page}){
    await page.goto("https://practice.expandtesting.com/dropdown")
    await page.locator("[name='country']").selectOption("DZ")
    await page.locator("[name='country']").selectOption({value: "AG"})
    await page.locator("[name='country']").selectOption({label: "Brazil"})
    await page.locator("[name='country']").selectOption({index: 15})

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption([{label: 'Volvo'}, {label : 'Audi'}])
    await page.waitForTimeout(3000)
})







