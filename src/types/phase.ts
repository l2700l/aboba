import { baseType } from "./base";

export type phaseType = baseType & {
    data: {
        phase: 'seed' | 'private' | 'public'
    }
}