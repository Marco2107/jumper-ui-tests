import { Page, expect, Locator } from '@playwright/test';

export class WalletModal {
  private readonly page: Page;
  private readonly selectWalletDialog: Locator;
  private readonly selectWalletHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectWalletDialog = this.page.getByRole('dialog', { name: 'Select a wallet' });
    this.selectWalletHeader = this.selectWalletDialog.getByRole('heading', { name: 'Select a wallet' });
  }

  private getWalletItemElement(walletName: string): Locator {
    return this.selectWalletDialog.getByText(walletName);
  }

  async selectBrowserWallet(walletName: string): Promise<void> {
    await this.getWalletItemElement(walletName).click();
  }

  async expectSelectModalIsVisible(): Promise<void> {
    await expect(this.selectWalletHeader).toBeVisible();
  }
}