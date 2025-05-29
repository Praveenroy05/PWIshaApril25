// Hooks - SPecial function that performs some specific task 

// beforeAll() - Run once before running any test cases 
// beforeEach() - Run once before each test case
// afterEach() - Run once after each test cases
// afterAll() - Run once after running all the test cases


import {test, expect} from '@playwright/test'

test.beforeAll(async ()=>{
    console.log("Before All");
})

test.afterAll(async function(){
    console.log("After All");
})

test.beforeEach(async ()=>{
    console.log("Before Each");
})
test.afterEach(async function(){
    console.log("After Each");
})

test("Test4", {tag : ['@smoke', '@regression']}, async ()=>{
    console.log("Test4");
})
test("Test1", async ()=>{
    console.log("Test1");
})

test("Test2", async ()=>{
    console.log("Test2");
})

test("Test3", async ()=>{
    console.log("Test3");
})



// before all

// before each
// Test1
// after each

// before each
// Test2
// after each

// before each
// Test3
// after each

// before each
// Test4
// after each

// after all