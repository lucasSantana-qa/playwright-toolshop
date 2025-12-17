import { APIRequestContext, Page } from "@playwright/test";
import admin from '../../fixtures/login.json'

const BASE_URL = process.env.BASE_URL_API

export async function loginApi(request: APIRequestContext) {
    return await request.post(`${BASE_URL}/users/login`, {data:admin})
}
