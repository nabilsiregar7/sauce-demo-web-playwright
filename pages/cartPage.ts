import { Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyItemInCart(itemName: string): Promise<boolean> {
        const itemLocator = this.page.locator(`.cart_item:has-text("${itemName}")`);
        return await itemLocator.isVisible();
    }

    async proceedToCheckout() {
        await this.page.click('#checkout');
    }
}
