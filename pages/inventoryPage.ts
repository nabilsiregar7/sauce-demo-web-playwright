import { Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addItemToCart(itemName: string) {
        const itemLocator = this.page.locator(`.inventory_item:has-text("${itemName}")`);
        await itemLocator.locator('button[data-test^="add-to-cart"]').click();
    }

    async goToCart() {
        await this.page.click('.shopping_cart_link');
    }

    async sortItemsBy(option: string) {
        await this.page.selectOption('.product_sort_container', option);
    }

    async getItemNames(): Promise<string[]> {
        return this.page.locator('.inventory_item_name').allTextContents();
    }

    async getItemPrices(): Promise<number[]> {
        const pricesText = await this.page.locator('.inventory_item_price').allTextContents();
        return pricesText.map(price => parseFloat(price.replace('$', '')));
    }
}
