import { Page } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillCustomerInfo(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill('#first-name', firstName);
        await this.page.fill('#last-name', lastName);
        await this.page.fill('#postal-code', postalCode);
        await this.page.click('#continue');
    }

    async completeOrder() {
        await this.page.click('#finish');
    }

    async verifyOrderSuccess(): Promise<boolean> {
        return this.page.locator('.complete-header').isVisible();
    }
}
