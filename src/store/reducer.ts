import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunkType} from "./store";
import {API} from "../api/api";
import {ResponseCardsType} from "../types/types";

const initialState = {
    status: 'loading' as RequestStatusType,
    card: {} as ResponseCardsType
}

const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState,
    reducers: {
        setProductCardAC(state, action: PayloadAction<ResponseCardsType>) {
            state.card = action.payload
        },
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
    }
})
export const CardsReducer = cardsSlice.reducer;
export const {setProductCardAC, setAppStatusAC} = cardsSlice.actions

export const getProductCard = (): AppThunkType => async dispatch => {
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const response = await API.productCard()
        dispatch(setProductCardAC(response))
    } catch (error) {
        alert(error)
    }finally {
        dispatch(setAppStatusAC({status: 'succeeded'}))
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
