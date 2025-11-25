import { Page, expect } from '@playwright/test';

export class WalletDrawer {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async expectWalletAddressIsDisplayed(address: string): Promise<void> {
    const truncatedAddress = `${address.slice(0, 7)}...${address.slice(-5)}`;
    const addressButton = this.page.getByRole('button', { name: truncatedAddress });
    await expect(addressButton).toBeVisible();
  }
}