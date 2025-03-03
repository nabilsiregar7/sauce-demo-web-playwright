import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { TEST_USERS } from '../utils/testData';

test('User can log in successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(TEST_USERS.standard.username, TEST_USERS.standard.password);

    await expect(page).toHaveURL(/inventory/);
});
