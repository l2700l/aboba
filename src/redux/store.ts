import { configureStore, createSlice } from "@reduxjs/toolkit";
import { balanceType } from "../types/balance";
import { timeType } from "../types/time";
import { userType } from "../types/user";

const initialState = {
    user: {
    } as userType,
    balance: {
    } as balanceType,
    time: {
    } as timeType
}

const globalState = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload
        },
        updateBalance: (state, action) => {
            state.balance = action.payload
        },
        updateTime: (state, action) => {
            state.time = action.payload
        },
    }
})

export const {updateUser, updateBalance, updateTime} = globalState.actions


export const store = configureStore({
    reducer: globalState.reducer
})

export type RootStore = ReturnType<typeof store.getState>;