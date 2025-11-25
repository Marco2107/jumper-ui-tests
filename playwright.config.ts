import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  
  reporter: [['html'], ['list']],
  
  use: {
    baseURL: process.env.BASE_URL || 'https://jumper.exchange',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    navigationTimeout: 30000,
    trace: 'on-first-retry',
  },

  outputDir: 'test-results',

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  testMatch: [
    'tests/**/*.spec.ts',
    'tests/**/*.test.ts'
  ],

  timeout: 30000,
  
  expect: {
    timeout: 10000,
  },
});