import { Page } from '@playwright/test';
import { BASE_URL } from '../utils/config';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(BASE_URL);
    }

    async login(username: string, password: string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }
}
