import { Page, expect, Locator } from '@playwright/test';

export class LearnPage {
  private readonly page: Page;
  private readonly learnParagraph: Locator;

  constructor(page: Page) {
    this.page = page;
    this.learnParagraph =  this.page.getByRole('paragraph')
  }

  async expectLearnPageIsDisplayed(): Promise<void> {
    await expect(this.page).toHaveURL('https://jumper.exchange/learn');
  }

  async expectParagraphTextIsVisible(text: string): Promise<void> {
    const paragraphElement = this.learnParagraph.getByText(text);
    await expect(paragraphElement).toBeVisible();
   }

  async expectDiscordLinkIsVisible(): Promise<void> {
    const discordLink = this.page.getByRole('link', { name: 'Join our Discord to learn' });
    await expect(discordLink).toBeVisible();
  }

}