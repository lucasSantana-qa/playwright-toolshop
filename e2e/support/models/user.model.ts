export interface UserModel {
    first_name: string
    last_name: string
    address: {
        street: string,
        city: string,
        state: string
        country: string
        postal_code: string
    }
    phone: string
    dob: string
    password: string
    email: string
}