// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config ={
  testDir: './tests',
  timeout:50*1000,
  expect:{
    timeout:50*1000,
  },
  reporter:'html',
  use: {

browserName :"chromium"
  },
};

module.exports = config