const{test,expect}=require('@playwright/test')

test('TC001',async({page})=>
{

await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("//input[@id='name']").fill("Swapnil");
await page.locator("//input[@id='email']").fill("swapnil17@gmail.com");
await page.close();


})

test('TC002',async({page})=>
{

await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("//input[@id='name']").fill("Swapnil");
await page.locator("//input[@id='email']").fill("swapnil17@gmail.com");
await page.locator("//input[@id='female']").click();
await page.locator("//input[@id='monday']").click();


})

test('TC003',async({page})=>
{

await page.goto("https://testautomationpractice.blogspot.com/");
await page.locator("//input[@id='name']").fill("Swapnil");
await page.locator("//input[@id='email']").fill("swapnil17@gmail.com");
await page.locator("//input[@id='female']").click();
await page.locator("//input[@id='monday']").click();
// const title=await page.title();
await page.close();


})