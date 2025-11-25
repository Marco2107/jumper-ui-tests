import { Page, Locator } from '@playwright/test';

export class ExchangePage {
  private readonly page: Page;
  private readonly connectButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.connectButton = this.page.getByRole('button', { name: 'Connect', exact: true });
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async clickConnectButton(): Promise<void> {
    await this.connectButton.click();
  }

  async openConnectedWallet(address: string): Promise<void> {
    const truncatedAddress = `${address.slice(0, 7)}...${address.slice(-5)}`;
    const connectedWalletButton = this.page.getByRole('button', { 
      name: `wallet-avatar chain-avatar ${truncatedAddress}` 
    });
    await connectedWalletButton.click();
  }
}
