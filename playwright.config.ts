import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false,
        ignoreHTTPSErrors: true,
        screenshot: 'on',
        video: 'on',
        acceptDownloads: true,
        trace: 'on'
    },
    workers: 2,
    projects: [
        { name: 'chromium', use: { browserName: 'chromium' } },
        { name: 'firefox', use: { browserName: 'firefox' } }
    ]
});
