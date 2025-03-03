import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false, // Set to true for headless execution
        browserName: 'chromium',
        screenshot: 'on',
        video: 'on'
    },
    projects: [
        { name: 'chromium', use: { browserName: 'chromium' } },
        { name: 'firefox', use: { browserName: 'firefox' } }
    ]
});
