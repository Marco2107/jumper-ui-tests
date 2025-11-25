import { test, expect } from '@playwright/test';
import { ExchangePage } from '../../src/pages/ExchangePage';
import { LearnPage } from '../../src/pages/LearnPage';

test.describe('Learn Page Navigation', () => {
  //A new comment
  test('User navigates through the learn page', async ({ page }) => {
    const exchangePage = new ExchangePage(page);
    const learnPage = new LearnPage(page);

    await test.step('Given I am on the exchange page', async () => {
      await exchangePage.goto();
    });

    await test.step('When I open the learn page through the main menu', async () => {
      await exchangePage.openMainMenu();
      await exchangePage.navigateToLearnPage();
    });

    await test.step('Then the learn page is displayed', async () => {
      await learnPage.expectLearnPageIsDisplayed();
    });

    await test.step('And the page content is visible', async () => {
      await learnPage.expectParagraphTextIsVisible('Recent Posts');
      await learnPage.expectDiscordLinkIsVisible();
      await learnPage.expectParagraphTextIsVisible('Tutorial');
      await learnPage.expectParagraphTextIsVisible('Partnerships');
      await learnPage.expectParagraphTextIsVisible('Announcements');
      await learnPage.expectParagraphTextIsVisible('Knowledge');
    });
  });
});