import { baseType } from "./base";

export type balanceType = baseType & {
    data: {
        CMON: number,
        ETH: string
    }
}