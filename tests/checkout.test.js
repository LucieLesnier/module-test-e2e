const timeout = 15000;

// Test des fonctionnalités de prise de commande
describe("Checkout process", () => {
    let page;

    test('checkout', async () => {
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('body', {timeout: 60000});
        await page.type('#user-name', process.env.TEST_LOGIN, {delay: 5});
        await page.type('#password', process.env.TEST_PASSWORD, {delay: 5});
        const html = await page.$eval('body', e => e.innerHTML);
        const sub = expect(html).toContain('login');
        page.click('input', sub);
        await page.click('input[type=submit]');

        // à compléter


        const htmlM = await page.$eval('body', e => e.innerHTML);
        const href = expect(html).toContain('a');
        await page.screenshot({path: './tests/img/OkDone.png'});
        await page.click('#item_4_img_link');
        await page.click('#item_4_title_link');

        page.evaluate(() => window.open('https://www.saucedemo.com/inventory.html?id=4'));

        const button = expect(htmlM).toContain('button');
        page.click('button[data-test=add-to-cart-sauce-labs-backpack]');
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/AddToCart.png'});
        await page.waitFor(1000);
        page.click('button[data-test=remove-sauce-labs-backpack]', button);
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/RemoveFromCart.png'});
        const backTo = expect(htmlM).toContain('button');
        page.click('button[data-test=back-to-products]', backTo);
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/BackToProduct.png'});
        await page.waitFor(1000);


        const burgerMenu = expect(htmlM).toContain('button');
        page.click('#react-burger-menu-btn', burgerMenu);
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/OpenBurgerMenu.png'});
        page.click('#reset_sidebar_link', href);
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/ResetAppState.png'});
        page.click('#react-burger-cross-btn', button);
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/BackToItems.png'});



    }, timeout);


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {

        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()

    }, timeout)

});
