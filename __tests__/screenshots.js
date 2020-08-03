import 'expect-puppeteer'

const timeout = process.env.SLOWMO ? 30000 : 10000;

beforeAll(async () => {
  await page.goto(URL, {waitUntil: 'domcontentloaded'});
});

describe('Test header and title of the page', () => {

    test('Title of the page', async () => {
        const title = await page.title();
        await page.screenshot({path: 'homepage.png'});
        expect(title).toBe('Minesweeper');
    }, timeout);  
    
});
