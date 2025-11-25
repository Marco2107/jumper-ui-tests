import { test, expect } from '@playwright/test';
import { injectMockWallet } from '../utils/mockWallet';
import { ExchangePage } from '../../src/pages/ExchangePage';
import { WalletModal } from '../../src/components/WalletModal';
import { WalletDrawer } from '../../src/components/WalletDrawer';

const MOCK_ADDRESS = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

test.describe('Wallet Connection', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.addInitScript({ content: injectMockWallet() });
  });

  test('User connects their Ethereum wallet', async ({ page }) => {
    const exchangePage = new ExchangePage(page);
    const walletModal = new WalletModal(page);
    const walletDrawer = new WalletDrawer(page);

    await test.step('Given I access Jumper Exchange', async () => {
      await exchangePage.goto();
    });

    await test.step('When I connect my wallet', async () => {
      await exchangePage.clickConnectButton();
      
      await walletModal.expectSelectModalIsVisible();
      await walletModal.selectBrowserWallet('MetaMask');
    });

    await test.step('Then my wallet is connected', async () => {
      await exchangePage.openConnectedWallet(MOCK_ADDRESS);
      await walletDrawer.expectWalletAddressIsDisplayed(MOCK_ADDRESS);
    });
});
});