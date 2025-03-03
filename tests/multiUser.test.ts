import { test, expect, Browser } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { CHECKOUT_DETAILS } from '../utils/testData';

async function checkoutFlow(browser: Browser, username: string, item: string, firstName: string, lastName: string, postalCode: string) {
    const context = await browser.newContext(); 
    const page = await context.newPage();

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(username, 'secret_sauce');

    await inventoryPage.addItemToCart(item);
    await inventoryPage.goToCart();

    await expect(cartPage.verifyItemInCart(item)).resolves.toBeTruthy();

    await cartPage.proceedToCheckout();
    await checkoutPage.fillCustomerInfo(firstName, lastName, postalCode);
    await checkoutPage.completeOrder();

    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');

    await context.close();
}

test('Two users checkout at the same time', async ({ browser }) => {
    await Promise.all([
        checkoutFlow(browser, 'standard_user', 'Sauce Labs Backpack', 'Nabil', 'Siregar', '16922'),
        checkoutFlow(browser, 'performance_glitch_user', 'Sauce Labs Bolt T-Shirt', 'Kiaranamu', 'Iswar', '78912')
    ]);
});
