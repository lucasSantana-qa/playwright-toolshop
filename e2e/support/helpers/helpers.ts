import { APIRequestContext } from "@playwright/test";
// import {UserModel} from '../models/registerUser.model'
import { LoginUser } from "../models/loginUser.model";

const BASE_URL = process.env.BASE_URL_API

export async function loginApi(request: APIRequestContext, user: LoginUser) {
    return await request.post(`${BASE_URL}/users/login`, {data: user})
}
