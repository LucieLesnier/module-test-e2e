const timeout = 150000;

// Test des fonctionnalités d'authentification
describe("Auth features", () => {
    let page;

    test('login and logout', async () => {
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('body', {timeout: 60000});
        await page.type('#user-name', process.env.TEST_LOGIN, {delay: 5});
        await page.type('#password', process.env.TEST_PASSWORD, {delay: 5});

        // à compléter
        const html = await page.$eval('body', e => e.innerHTML);
        const sub = expect(html).toContain('login');
        page.click('input', sub);
        page.click('input[type=submit]')
        await page.waitFor(1000);
        await page.screenshot({path: './tests/img/login_screenAuthOkDone.png'});


    }, timeout);

    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
