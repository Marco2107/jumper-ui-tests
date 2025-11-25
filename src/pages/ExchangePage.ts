import { Page,expect, Locator } from '@playwright/test';

export class ExchangePage {
  private readonly page: Page;
  private readonly connectButton: Locator;
  private readonly mainMenuButton: Locator;
  private readonly verticalTabList: Locator;
  private readonly learnLink: Locator;
  private readonly missionsLink: Locator;
  private readonly widgetBanner: Locator;
  private readonly getStartedButton: Locator;
  private readonly fromTokenSelector: Locator;
  private readonly destinationTokenSelector: Locator;
  private readonly selectChainSelector: Locator;
  private readonly sendDifferentWalletButton: Locator;
  private readonly connectWalletButton: Locator;
  private readonly settingsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.connectButton = this.page.getByRole('button', { name: 'Connect', exact: true });
    this.mainMenuButton = this.page.getByRole('button', { name: 'Main Menu' });
    this.verticalTabList = this.page.getByRole('tablist', { name: 'vertical-tabs' });
    this.learnLink = this.page.getByRole('link', { name: 'Learn' });
    this.missionsLink = this.page.getByRole('link', { name: 'Missions' });
    this.widgetBanner = this.page.getByRole('banner');
    this.getStartedButton = this.page.getByRole('button', { name: 'Open welcome screen' })
    this.fromTokenSelector = this.page.getByRole('button', { name: 'From Select chain and token' });
    this.destinationTokenSelector = page.getByRole('button', { name: 'To Select chain and token' });
    this.selectChainSelector = page.getByRole('button', { name: 'To Select chain' });
    this.sendDifferentWalletButton = page.getByRole('button', { name: 'Send to a different wallet' });
    this.connectWalletButton = page.getByRole('button', { name: 'Connect wallet' });
    this.settingsButton = page.getByRole('button', { name: 'Settings' })
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

  async openMainMenu(): Promise<void> {
    await this.mainMenuButton.click();
  }

  async navigateToLearnPage(): Promise<void> {
    await this.learnLink.click();
  }

  async navigateToMissions(): Promise<void> {
    await this.missionsLink.click();
  }

  async selectWidgetTab(tabName: string): Promise<void> {
    const tab = this.verticalTabList.getByRole('tab', { name: tabName });
    await tab.click();
  }

  async clickGetStarted(): Promise<void> {
    await this.getStartedButton.click()
  }

  async expectWidgetIsVisible(widgetName: string): Promise<void> {
    const widgetTitle = this.widgetBanner.filter({ hasText: new RegExp(`^${widgetName}$`) });
    await expect(widgetTitle).toBeVisible();
  }

  async expectExchangeWidgetElementsAreVisible(): Promise<void> {
    await expect(this.fromTokenSelector).toBeVisible();
    await expect(this.destinationTokenSelector).toBeVisible();
    await expect(this.settingsButton).toBeVisible();
    await expect(this.connectWalletButton).toBeVisible();
    await expect(this.sendDifferentWalletButton).toBeVisible();
  }

  async expectGasWidgetElementsAreVisible(): Promise<void> {
    await expect(this.fromTokenSelector).toBeVisible();
    await expect(this.selectChainSelector).toBeVisible();
    await expect(this.settingsButton).toBeVisible();
    await expect(this.connectWalletButton).toBeVisible();
    await expect(this.sendDifferentWalletButton).toBeVisible();
  }




}
