import { Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addItemToCart(itemName: string) {
        await this.page.locator(`text=${itemName}`).locator('xpath=..').locator('button').click();
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
}
