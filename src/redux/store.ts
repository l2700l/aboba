import { configureStore, createSlice } from "@reduxjs/toolkit";
import { balanceType } from "../types/balance";
import { phaseType } from "../types/phase";
import { timeType } from "../types/time";
import { userType } from "../types/user";

const initialState = {
    user: {
    } as userType,
    phase: {
        data: {
            phase: 'seed'
        }
    } as phaseType,
    balance: {
        data: {
            CMON: 250000,
            ETH: '100000000000000000000000'
        }
    } as balanceType,
    time: {
        data: {
            currentTime: 10
        }
    } as timeType
}

const globalState = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
        },
        updatePhase: (state, action) => {
            state.phase = action.payload
        },
        updateBalance: (state, action) => {
            state.balance = action.payload
        },
        updateTime: (state, action) => {
            state.time = action.payload
        },
    }
})

export const {updateUser, updateBalance, updatePhase, updateTime} = globalState.actions


export const store = configureStore({
    reducer: globalState.reducer
})

export type RootStore = ReturnType<typeof store.getState>;