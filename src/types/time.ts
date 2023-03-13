import { baseType } from "./base";

export type timeType = baseType & {
    data: {
        timeDiff: number,
        phase: 'seed' | 'private' | 'public'
    }
}