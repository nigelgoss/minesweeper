const puppeteer = require("puppeteer");

describe('Analytics', () => {
  beforeAll(async () => {     
    await page.goto('https://designisdead.com/')   
  })    

  it('should return google tag manager', async () => {     
    const tagManager = await page.evaluate(() => google_tag_manager)     
    expect(tagManager).toBeDefined()   
  }) 
})


(async () => {   
   const browser = await puppeteer.launch();   
   const page = await browser.newPage();   
   await page.goto("http://apps.nigelgoss.co.uk/minesweeper/");   
   await page.screenshot({path: "homepage.png"});    

   await browser.close(); 
})();
