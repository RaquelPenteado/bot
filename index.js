require('dotenv').config();
const puppeteer = require('puppeteer');

console.log('Bot rodando!')

async function bot() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://twitter.com/i/flow/login');


    await page.waitForSelector('input[name="username"]');
    const email = process.env.EMAIL_USER;
    await page.$eval('input[name="username"]', (el, value) => el.value = value, email);
    await page.keyboard.type('.com');

    await page.click('[class="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]');

    if(page.waitForSelector == 'input[name="text"]'){
      await page.waitForSelector('input[name="text"]');
      const name = process.env.NAME_USER;
      await page.$eval('input[name="text"]', (el, value) => el.value = value, name);
      await page.keyboard.type('a');
  
      await page.click('[class="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]');
    }
   
    await page.waitForSelector('input[name="password"]');
    const pass = process.env.PASS_USER;
    await page.$eval('input[name="password"]', (el, value) => el.value = value, pass);
    await page.keyboard.type('3');

    await page.click('[class="css-901oao r-1awozwy r-18jsvk2 r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]');

    console.log('Login efetuado com sucesso!');

    await page.waitForNavigation();

    await page.goto('https://twitter.com/explore');
    
    await page.waitForSelector('input[type="text"]');
    const user = process.env.NAME_ACCOUNT;
    await page.$eval('input[type="text"]', (el, value) => el.value = value, user);
    await page.keyboard.type(' ');
    await page.keyboard.press('Enter');


  await page.goto(`https://twitter.com/search?q=%40${user}&src=recent_search_click&f=user`);
  const userURL = process.env.user_URL;
  await page.goto(`https://twitter.com/${userURL}`);
  // await page.click('[class="css-901oao r-1awozwy r-18jsvk2 r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]').then(() => {
  //   console.log("Conta seguida com sucesso!");
  // }).catch((err) => {
  //   console.log(err);
  // });
  // await page.waitForSelector('aria-label["Follow @di_fuzaro"]');
  await page.waitForSelector('[data-testid="placementTracking"]');
  await page.click('[data-testid="placementTracking"]');
  console.log('Conta seguida com sucesso!');




    // await browser.close();

    
  };

  bot();