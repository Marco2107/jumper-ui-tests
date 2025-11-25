import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  timeout: 30 * 1000,
  
  expect: {
    timeout: 10 * 1000,
  },

  reporter: [['html'], ['list'], ['allure-playwright']],
  
  use: {
    baseURL: process.env.BASE_URL || 'https://jumper.exchange',
    viewport: { width: 1280, height: 720 },
    
    actionTimeout: 15 * 1000,
    navigationTimeout: 30 * 1000,
    
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  outputDir: 'test-results',

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});