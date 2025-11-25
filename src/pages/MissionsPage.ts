import { Page, expect, Locator } from '@playwright/test';

export class MissionsPage {
  private readonly page: Page;
  private readonly exchangeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.exchangeLink = this.page.getByRole('link', { name: 'Exchange' });
  }

  async expectMissionsPageIsVisible(): Promise<void> {
    const missionsElement = this.page.getByText('Missions').nth(2);
    await expect(missionsElement).toBeVisible();
  }

  async navigateToExchange(): Promise<void> {
    await this.exchangeLink.click();
  }
}