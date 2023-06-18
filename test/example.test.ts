import { expect } from 'chai';
import { Browser } from 'webdriverio';

describe('Example Test', () => {
    let browser: Browser;
  
    before(async () => {
      browser = await browser.newBrowser('chrome');
    });
  
    after(async () => {
      await browser.close();
    });
  
    it('should navigate to a website', async () => {
      await browser.url('https://www.example.com');
      const title = await browser.getTitle();
      expect(title).to.equal('Example Domain');
    });
  
    // Add more test cases as needed
  });
  