import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/inventoryPage';
import { TEST_USERS } from '../utils/testData';

test('Sort items by Name (A to Z) and verify', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(TEST_USERS.standard.username, TEST_USERS.standard.password);

    await inventoryPage.sortItemsBy('az');
    const items = await inventoryPage.getItemNames();
    const sortedNames = [...items].sort((a, b) => a.localeCompare(b));

    expect(items).toEqual(sortedNames);
});

test('Sort items by Name (Z to A) and verify', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(TEST_USERS.standard.username, TEST_USERS.standard.password);

    await inventoryPage.sortItemsBy('za');
    const items = await inventoryPage.getItemNames();
    const sortedNames = [...items].sort((a, b) => b.localeCompare(a));

    expect(items).toEqual(sortedNames);
});

test('Sort items by Price (Low to High) and verify', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(TEST_USERS.standard.username, TEST_USERS.standard.password);

    await inventoryPage.sortItemsBy('lohi');

    const items = await inventoryPage.getItemPrices();
    const sortedPrices = [...items].sort((a, b) => a - b);

    expect(items).toEqual(sortedPrices);
});

test('Sort items by Price (High to Low) and verify', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(TEST_USERS.standard.username, TEST_USERS.standard.password);

    await inventoryPage.sortItemsBy('hilo');

    const items = await inventoryPage.getItemPrices();
    const sortedPrices = [...items].sort((a, b) => b - a);

    expect(items).toEqual(sortedPrices);
});