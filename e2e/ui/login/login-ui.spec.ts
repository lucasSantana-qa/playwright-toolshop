import { test, expect } from '@playwright/test'
import { LoginPage } from '../../support/pages/login/login-page';

require('dotenv').config()

let loginPage: LoginPage
test.beforeEach(({ page }) => {
    loginPage = new LoginPage(page)
})
test.describe('Validar campos obrigatórios', () => {
    test('deve validar mensagem de campos obrigatórios no login', async ({ page }) => {
        await page.goto(`${process.env.BASE_URL_UI}`)
        await page.click("data-test=nav-sign-in")
        await page.click("data-test=login-submit")

        await loginPage.validarCampoObrigatorioEmail()
        await loginPage.validarCampoObrigatorioLogin()
    })
});
