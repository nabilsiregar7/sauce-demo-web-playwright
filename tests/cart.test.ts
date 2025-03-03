import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { TEST_USERS } from '../utils/testData';
import { CHECKOUT_DETAILS } from '../utils/testData';

test('User can add items and complete checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(TEST_USERS.standard.username, TEST_USERS.standard.password);

    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.addItemToCart('Sauce Labs Bolt T-Shirt');
    await inventoryPage.goToCart();

    expect(await cartPage.verifyItemInCart('Sauce Labs Backpack')).toBeTruthy();
    expect(await cartPage.verifyItemInCart('Sauce Labs Bolt T-Shirt')).toBeTruthy();

    await cartPage.proceedToCheckout();
    await checkoutPage.fillCustomerInfo(CHECKOUT_DETAILS.firstName, CHECKOUT_DETAILS.lastName, CHECKOUT_DETAILS.postalCode);
    await checkoutPage.completeOrder();

    expect(await checkoutPage.verifyOrderSuccess()).toBeTruthy();
});
