import { MarketPage } from "../../pages/marketPage";

console.log('baseUrl from config:', Cypress.config('baseUrl'))

describe("Test Go To Market Page", () => {
  it("[TEST-001] - Test Navigate to Market Page", () => {
    const marketPage = new MarketPage();

    cy.visit("https://stockanalyzer.adenxus.com");
  });
});
