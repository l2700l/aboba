import { baseType } from "./base";

export type timeType = baseType & {
    data: {
        currentTime: number
    }
}