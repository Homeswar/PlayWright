import { test, expect } from '@playwright/test';

    const email = "homeshkh2018@gmail.com";
    const pwd = "Kh3155@kh";
    const baseUrl = "https://eventhub.rahulshettyacademy.com/";
async function login(page)
{
    await page.goto(`${baseUrl}login`);
    await page.getByPlaceholder("you@email.com").fill(email);
    await page.getByPlaceholder("••••••").fill(pwd);
    await page.locator("#login-btn").click();
    await expect(page.getByRole('link',{name:'Browse Events →'})).toBeVisible();
    }

test('Creating New Event', async({ page })=> {

        await login(page);
        await page.goto(`${baseUrl}admin/events`);
        const evntTitle = `TestEvent${Date.now()}`;
        await page.locator("#event-title-input").fill(evntTitle);
        await page.locator("#admin-event-form textarea").fill("Celebrate the Festival of Lights at the grandest Diwali Mela in North India. Enjoy 200+ stalls of artisanal crafts, street food, folk performances, fireworks, and cultural showcases spanning three vibrant evenings.");
        await page.getByLabel("City").fill("Bangalore");
        await page.getByLabel("Venue").fill("243,Indira Nagar");
        await page.getByLabel("Event Date & Time").fill("2027-12-31T10:00");
        await page.getByLabel("Price ($)").fill("250");
        await page.getByLabel("Total Seats").fill("750");
        await page.locator("#add-event-btn").click();
        await expect(page.getByText("Event created!")).toBeVisible();
        console.log(`Creted Event ${evntTitle}`);
        await page.locator("#nav-events").click();













    await page.pause();
});
