import {expect, test} from '@playwright/test'
import * as helpers from '../../support/helpers/helpers'
import user_data from '../../fixtures/login.json'
import { LoginUser } from '../../support/models/loginUser.model'

const BASE_URL = process.env.BASE_URL_API

test('deve realizar login', async ({request}) => { 
    const user = user_data.valid as LoginUser
    const response = await helpers.loginApi(request, user)
    const body = await response.json()

    expect(response.status()).toBe(200)
    expect(body.access_token).not.toBeNull()
    expect(body.token_type).toBe('bearer')
})

test('deve retornar erro ao enviar requisição com credenciais inválidas', async ({request}) => {
    const user = user_data.invalid as LoginUser
    const response = await helpers.loginApi(request, user)
    const body = await response.json()

    expect(body.error).toBe("Unauthorized")
    expect(response.status()).toBe(401)
})

test('deve retornar erro ao enviar requisição com email vazio', async ({request}) => {
    const user = user_data.invalid_no_email as LoginUser
    const response = await helpers.loginApi(request, user)
    const body = await response.json()

    expect(response.status()).toBe(401)
    expect(body.error).toBe("Invalid login request")
})