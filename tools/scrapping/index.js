const puppeteer = require('puppeteer');

(async () => {
  console.log('Launch browser');
  const browser = await puppeteer.launch(); // launch the browser WITHOUT the UI
  //   const browser = await puppeteer.launch({ headless: false }); // launch the browser WITH the UI

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');

  let title1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log('Title:', title1);
  console.log('Closing browser');
  browser.close();
  console.log('Browser closed');
})();
