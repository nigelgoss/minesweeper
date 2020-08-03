const puppeteer = require("puppeteer");

(async () => {   
   const browser = await puppeteer.launch();   
   const page = await browser.newPage();   
   await page.goto("http://apps.nigelgoss.co.uk/minesweeper/");   
   await page.screenshot({path: "homepage.png"});    

   await browser.close(); 
})();
