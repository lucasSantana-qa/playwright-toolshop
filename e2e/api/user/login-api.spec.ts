import {expect, test} from '@playwright/test'
import { loginApi } from '../../support/helpers/helpers'

const BASE_URL = process.env.BASE_URL_API

test('deve logar como admin', async ({request}) => {    
    const response = await loginApi(request)

    const body = await response.json()

    expect(response.status()).toBe(200)
    expect(body.access_token).not.toBeNull()
    expect(body.token_type).toBe('bearer')
})