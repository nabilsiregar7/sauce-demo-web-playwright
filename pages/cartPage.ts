import { Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyItemInCart(itemName: string): Promise<boolean> {
        return this.page.locator(`text=${itemName}`).isVisible();
    }

    async proceedToCheckout() {
        await this.page.click('#checkout');
    }
}
