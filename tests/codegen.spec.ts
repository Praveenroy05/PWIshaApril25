// To open the codegen tool - npx playwright codegen "url"

import { test, expect } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Windows.html');
  await expect(page.getByRole('button', { name: 'click' })).toBeVisible();
  await expect(page.getByRole('paragraph')).toContainText('"_blank"');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'click' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Downloads' }).click();
  await expect(page1.getByRole('heading', { name: 'Support the Selenium Project' })).toBeVisible();
  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('textbox', { name: 'Email id for Sign Up' })).toBeVisible();
});

test.only('test1', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await expect(page.getByRole('textbox', { name: 'Username' })).toHaveValue('student');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading')).toContainText('Successfully');
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await page.getByRole('link', { name: 'Log out' }).click();
});