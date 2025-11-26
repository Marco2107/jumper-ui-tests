# Jumper UI - Test Plan


## 1. Scope and Objective

### 1.1. Objective

The primary objective of this test plan is to validate the **User Interface (UI)** and **User Experience (UX)** of the Jumper Exchange application.
The focus is on **End-to-End (E2E) flows** from a user's perspective, ensuring that navigation, widget interactions, and visual feedback function correctly.

### 1.2. In Scope

The testing scope focuses on the frontend application using Playwright. It covers:

- **User Journeys:** Validation of critical paths (Wallet connection, Navigation).
- **UI Integrity:** Verification of widgets visibility and responsiveness across modules (Exchange, Gas).
- **Mocked Environment:** Use of **EIP-6963 mocks** to simulate wallet interactions without real keys.

### 1.3. Out of Scope

The following items are explicitly excluded:

- **On-Chain Execution:** No real assets are moved
- **Deep API Logic:** Routing algorithms and price accuracy are covered by the *API Test Plan*.

---

## 2. Approach

### 2.1. Methodology

The testing strategy follows a structured lifecycle to ensure comprehensive UI coverage for Jumper:

- **Exploratory Analysis:** Manual exploration of the application **from a user perspective** to identify critical workflows and happy paths.
- **Test Design:** Translation of these user journeys into functional test cases, combined with a technical analysis (DevTools) to select resilient accessibility attributes (A11y).
- **Automation:** Implementation of the test scenarios using **Playwright** and **TypeScript**, following the **Page Object Model (POM)** architecture to ensure repeatable and regression-proof validation.

### 2.2. Tools & Environment

- **Exploration:** Chrome DevTools, Playwright Codegen.
- **Automation:** Playwright UI, TypeScript, Page Object Model (POM).

---

## 3. Functional Test Cases

This section outlines the scenarios covered by the automated suite, written in Gherkin syntax for clarity.

### Scenario 1: User connects their Ethereum wallet

**Goal:** Validate the ability to connect a wallet via the UI using the mocked provider.

**Given** the user is on the Exchange page

**When** he connects the wallet using the "Browser Wallet" option

**Then** the wallet address (mocked) is displayed in the header

**And** the wallet drawer opens correctly upon interaction

### Scenario 2: User navigates through the Learn resources

**Goal:** Validate navigation of the learning section.

**Given** the user is on the Exchange page

**When** he opens the main menu

**And** he navigate to the "Learn" section

**Then** the Learn page is displayed

**And** the section "Recent Posts" is displayed

**And** the link "Join our Discord" is displayed

**And** the sections "Tutorial", "Partnerships", "Announcements", and "Knowledge" are visible

### Scenario 3: User navigates between trading widgets and pages

**Goal:** Verify the routing logic and visual integrity of the main modules.

**Given** the user is on the Exchange page

**When** he explores the Gas widget

**Then** all Gas widget elements should be displayed correctly

**When** he switches back to the Exchange widget

**Then** all Exchange widget elements should be displayed correctly

**When** he navigates to the Missions page

**Then** the Missions page content should be visible

**When** he returns to the Exchange platform

**Then** he should be back on the Exchange widget view

### Scenario 4: User configures token swap selection

**Goal:** Validate the interactivity of the Swap Widget (Token & Chain selection).

**Given** the user is on the Exchange page

**When** the user selects **ETH** on **Ethereum** as the source token

**Then** the Exchange widget should display the source selection

**When** the user selects **USDT** on **Ethereum** as the destination token

**Then** the Exchange widget should display the destination selection

**And** the swap configuration should show:

- ETH as source token on Ethereum network
- USDT as destination token on Ethereum network

---

## 4. CI/CD Integration

To ensure continuous quality delivery, the automated suite is integrated into the pipeline.

### 4.1. Trigger Strategy

- **Pull Requests (PR):** Automatic execution of the **Smoke Test Suite** to block regressions on critical paths.

### 4.2. Smoke Test Scope

The following scenarios are designated as Smoke Tests for PR validation to ensure that **critical application paths remain functional and no blocking regressions are introduced** before merging code.

- **Scenario 1:** Wallet Connection (Core Feature)
- **Scenario 3:** Navigation
- **Scenario 4:** Token Configuration (Business Logic)

## 5. Test suite report

### full report available : [**Test suite report**](https://marco2107.github.io/jumper-ui-tests/)

## 6. Issue

**[Bug] Discord Support hangs on loading state**
https://github.com/Marco2107/jumper-ui-tests/issues/3
