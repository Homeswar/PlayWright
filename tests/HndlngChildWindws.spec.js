const { test, expect } = require ('@playwright/test');

test('Handling child Windows',async function({browser}) 
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all([context.waitForEvent('page'),documentLink.click()]);

    const txt = await newPage.locator(".red").textContent();
    const arraytxt = txt.split("@");
    const domain = arraytxt[1].split(" ")[0];
    console.log(domain);
    await page.locator("#username").fill(domain);
    await page.pause();
});