import {test, expect} from '@playwright/test'
import path from 'path'

test('Handling Single File Upload', async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles("")
    //"__dirname/TestData/countReset.text"
    const filePath = path.join(__dirname, "../TestData/Courses.txt")

    await page.locator("#filesToUpload").setInputFiles(filePath)
    await expect(page.locator("#fileList li")).toContainText("Courses.txt")

})

test('Handling Multiple Files Upload', async ({page})=>{
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    // setInputFiles(["firstdata", "2nddata"])
    //"__dirname/TestData/countReset.text"
    const filePath = path.join(__dirname, "../TestData/Courses.txt")
    const filePath1 = path.join(__dirname, "../TestData/Cypress.txt")

    await page.locator("#filesToUpload").setInputFiles([filePath, filePath1])
    await expect(page.locator("#fileList li").first()).toContainText("Courses.txt")
    await expect(page.locator("#fileList li").last()).toContainText("Cypress.txt")

})