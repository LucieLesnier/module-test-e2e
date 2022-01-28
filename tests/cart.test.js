const timeout = 15000;

// Test des fonctionnalités de gestion du panier
describe("Cart features", () => {
    let page;

    test('add to cart', async () => {

        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('body', {timeout: 60000});
        await page.type('#user-name', process.env.TEST_LOGIN, {delay: 5});
        await page.type('#password', process.env.TEST_PASSWORD, {delay: 5});
        const html = await page.$eval('body', e => e.innerHTML);
        const sub = expect(html).toContain('login');
        page.click('input', sub);
        await page.click('input[type=submit]');
        const htmlM = await page.$eval('body', e => e.innerHTML);
        const href = expect(html).toContain('a');
        await page.waitForSelector('body');
        const button = expect(htmlM).toContain('button');
        page.click('button[data-test=add-to-cart-sauce-labs-backpack]', button);

        // à compléter

        await page.screenshot({path: './tests/img/WhereAreWe.png'});
        page.click('#shopping_cart_container');
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/WhereAreWeNow.png'});
        page.click('button[data-test=checkout]');
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/CartToCheckout.png'});

        await page.type('input[id=first-name]', 'Name');
        await page.type('input[id=last-name]', 'LastName');
        await page.type('input[id=postal-code]', '74000');
        await page.click('input[data-test=continue]');
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/HaveWeClick.png'});
        page.click('button[data-test=finish]');
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/OrderFinish.png'});
        page.click('button[data-test=back-to-products]');
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/BackToProductAfterOrder.png'});

    }, timeout);

    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()

    }, timeout)

});
