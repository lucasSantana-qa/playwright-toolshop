import { Page, expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async validarCampoObrigatorioEmail() {
        await expect(this.page.locator("//div[@id='email-error']/div")).toHaveText("Email is required")
        await expect(this.page.locator("data-test=email")).toHaveCSS("border-color", "rgb(220, 53, 69)")
    }

    async validarCampoObrigatorioLogin() {
        await expect(this.page.locator("//div[@id='password-error']")).toHaveText("Password is required")
        await expect(this.page.locator("data-test=password")).toHaveCSS("border-color", "rgb(220, 53, 69)")        
    }
}