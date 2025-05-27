// Web application
// Front End - JS, TS, html
// Back End - Java, Python, go .....
// Database - 

// API - 

// Request format
// URL - https://rahulshettyacademy.com/api/ecom/auth/login
// Method - POST                          GET - /POST - /PUT - /DELETE
// header - 
// body(payload) - JSON - { "key" : "value" } - {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}

// Response format
// Status code  - 
// response header
// response - json {"string" : "string"}


import {test, expect, request} from '@playwright/test'

const url = "https://rahulshettyacademy.com/api/ecom/auth/login"
const loginPayload = {userEmail: "test7lYM@gmail.com", userPassword: "Test@123"}

test("Post API Call", async ()=>{
    // apiContext
    const apiContext = await request.newContext()

    const apiResponse = await apiContext.post(url, {
        data: loginPayload
    })

    //console.log(await apiResponse.json())

    await expect( apiResponse.status()).toBe(200)

    const jsonResponse = await apiResponse.json()
    const token = await jsonResponse.token
    console.log(token);

    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmJjYTE3MGFlMmFmZDRjMGI0Yjg3NDgiLCJ1c2VyRW1haWwiOiJ0ZXN0N2xZTUBnbWFpbC5jb20iLCJ1c2VyTW9iaWxlIjoxMjM0NTY3ODkwLCJ1c2VyUm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzQ4MzYwMTQwLCJleHAiOjE3Nzk5MTc3NDB9.QR9Avmlw3k0J4_solPWjhFDWEZMqbGfndwf85srTVsg


})
