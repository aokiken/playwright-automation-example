import { chromium } from 'playwright';
import { existsSync } from 'fs';
import { resolve } from 'path';

(async () => {
  const storageState = resolve(__dirname, '../storageState.json');
  if (!existsSync(storageState)) {
    console.log('storageState.jsonがありません');
    console.log('下記コマンドを実行し、storageState.jsonを作成してください');
    console.log(`$ yarn run playwright open https://twitter.com --save-state=storageState.json`);
    process.exit(1);
  }
  const browser = await chromium.launch();  // Or 'firefox' or 'webkit'.
  const context = await browser.newContext({ storageState });
  const page = await context.newPage();
  await page.goto('https://twitter.com');
  // other actions...
  await page.pause();
  await browser.close();
})();
