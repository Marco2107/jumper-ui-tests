# Jumper UI Tests

This repository contains the automated end-to-end tests for the Jumper.Exchange application, written using Playwright.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher is recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Marco2107/jumper-ui-tests.git
   cd jumper-ui-tests
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Install the Playwright browsers:
   ```bash
   npx playwright install --with-deps
   ```

## Running the Tests

You can run the tests using several npm scripts:

- **Run all tests in headless mode:**
  ```bash
  npm test
  ```

- **Run all tests in headed mode (shows the browser):**
  ```bash
  npm run test:headed
  ```

- **Run tests in UI Mode for an interactive experience:**
  ```bash
  npm run test:ui
  ```

### Allure Reports

To run the tests and generate a local Allure report, use the following command. This will open the report in your browser automatically.

```bash
npm run allure
```

## CI/CD with GitHub Actions

This repository is configured with a GitHub Actions workflow that handles two scenarios:

1.  **Pull Request Checks:** When a pull request is opened against the `main` branch, a subset of validation tests are run automatically. The pull request cannot be merged if these tests fail.

2.  **Manual Report Deployment:** A full test run can be triggered manually from the "Actions" tab in GitHub. When run, it executes all tests and deploys a comprehensive Allure report to GitHub Pages.

The latest manual report is available at: **https://Marco2107.github.io/jumper-ui-tests/**
