import { baseType } from "./base";

export type whitelistRequests = baseType & {
    data: [
        {
            name: string,
            address: string,
        }
    ]
}