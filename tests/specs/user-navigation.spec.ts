import { test, expect } from '@playwright/test';
import { ExchangePage } from '../../src/pages/ExchangePage';
import { MissionsPage } from '../../src/pages/MissionsPage';

test.describe('Global Navigation & UI', () => {
  
  test('User explores core platform features', async ({ page }) => {
    const exchangePage = new ExchangePage(page);
    const missionsPage = new MissionsPage(page);

    await test.step('Given I access the Exchange page', async () => {
      await exchangePage.goto();
    });

    await test.step('When I explore the Gas trading widget', async () => {
      await exchangePage.selectWidgetTab('Gas');
      await exchangePage.expectWidgetIsVisible('Gas');
    });

    await test.step('Then all Gas widget elements should be displayed correctly', async () => {
      await exchangePage.expectGasWidgetElementsAreVisible();
    });

    await test.step('When I switch to the Exchange trading widget', async () => {
      await exchangePage.selectWidgetTab('Exchange');
      await exchangePage.expectWidgetIsVisible('Exchange');
    });

    await test.step('Then all Exchange widget elements should be displayed correctly', async () => {
      await exchangePage.expectExchangeWidgetElementsAreVisible();
    });

    await test.step('When I navigate to the Missions page', async () => {
      await exchangePage.navigateToMissions();
    });

    await test.step('Then the Missions page content should be visible', async () => {
      await missionsPage.expectMissionsPageIsVisible();
    });

    await test.step('When I return to the Exchange platform', async () => {
      await missionsPage.navigateToExchange();
    });

    await test.step('Then I should be back on the Exchange widget view', async () => {
      await exchangePage.expectWidgetIsVisible('Exchange');
    });
  });
});