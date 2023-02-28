import { baseType } from "./base";

export type userType = baseType & {
    data: {
        address: string,
        role: 'owner' | 'public' | 'private' | 'user',
    }
}
export type usersType = baseType & {
    data: [
        {
            address: string,
            publicBalance: number,
            privateBalance: number,
        }
    ]
}