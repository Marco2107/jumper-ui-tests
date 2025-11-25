import { test, expect } from '@playwright/test';
import { ExchangePage } from '../../src/pages/ExchangePage';

test.describe('Token & Chain Selection', () => {
  
  test('User configures token swap selection', async ({ page }) => {
    const exchangePage = new ExchangePage(page);

    await test.step('Given the user is on the Exchange page', async () => {
      await exchangePage.goto();
      await exchangePage.clickGetStarted();
    });

    await test.step('When the user selects ETH on Ethereum as source token', async () => {
      await exchangePage.selectSourceToken('Ethereum', 'ETH');
    });

    await test.step('Then the Exchange widget should display the selection', async () => {
      await exchangePage.expectWidgetIsVisible('Exchange');
    });

    await test.step('And the user selects USDT on Ethereum as destination token', async () => {
      await exchangePage.selectDestinationToken('Ethereum', 'USDT');
    });

    await test.step('Then the Exchange widget should display the selection', async () => {
      await exchangePage.expectWidgetIsVisible('Exchange');
    });

    await test.step('Then the swap configuration should show ETH as source and USDT as destination', async () => {
      await exchangePage.expectSelectedSwapConfiguration('ETH', 'Ethereum', 'USDT', 'Ethereum');
    });
  });
});