const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto("http://apps.nigelgoss.co.uk/minesweeper/");
    await page.screenshot({path: 'example.png'});
    await page.screenshot({path: 'example1.png'});
    await browser.close();
})();
