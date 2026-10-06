const {test,expect} =  require('@playwright/test')


test('Demo Project',async function({browser})
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const productName = "ZARA COAT 3";
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const usrName = "homeshkh2018@gmail.com";
    const email = "homeshkh2018@gmail.com";
    const pwd = "Homeswar@0000";
    await page.getByPlaceholder("email@example.com").fill(usrName);
    await page.getByPlaceholder("enter your passsword").fill(pwd);
    await page.getByRole("button", { name: "login" }).click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor(); 
   await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add To Cart"}).click();
   await page.getByRole("listitem").getByRole("button",{name:"  Cart "}).click();
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ZARA COAT 3")).toBeVisible();
   await page.getByRole("button", { name: "Checkout" }).click();

   await page.locator("[class='input txt']").first().fill("736");
   await page.locator("[class='input txt']").last().fill("GALLI KA");
   await page.locator("[placeholder*='Country']").pressSequentially("a",{delay:150});
   
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i =0;i<=optionsCount;i++)
   {
      const text = await dropdown.locator("button").nth(i).textContent();
      if(text === " Angola")
      {
         await dropdown.locator("button").nth(i).click();
         break
      }
   }
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);


   await page.locator("li [routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const row = await page.locator("tbody tr");
   for(let i=0;i<await row.count();i++)
   {
      const text = await row.nth(i).locator("th").textContent();
      if(orderId.includes(text))
      {
          row.nth(i).locator("button").first().click();
         break;
      }
   }
   const orID = await page.locator(".col-text").textContent();
   expect(orderId.includes(orID)).toBeTruthy();







    await page.pause();
});