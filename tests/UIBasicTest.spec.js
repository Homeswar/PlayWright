const {test, expect} = require ('@playwright/test');


test('playwight test',async function({browser}) 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshetty");
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();
    const txt = await page.locator("[style*='block']").textContent();
    console.log(txt);
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    //await page.pause();
});






/*test('page playwight test',async function({page}) 
{

    await page.goto("https://www.google.com//");
    await expect (page).toHaveTitle("Google");
});*/
