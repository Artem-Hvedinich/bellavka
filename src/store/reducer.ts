import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunkType} from "./store";
import {API} from "../api/api";
import {ResponseCardsType} from "../types/cardTypes";
import {ResponseCommentType} from "../types/commentType";

const initialState = {
    status: 'loading' as RequestStatusType,
    card: {} as ResponseCardsType,
    comments: {} as ResponseCommentType
}

const cardsSlice = createSlice({
    name: 'cardsSlice',
    initialState,
    reducers: {
        setProductCardAC(state, action: PayloadAction<ResponseCardsType>) {
            state.card = action.payload
        },
        setCommentsAC(state, action: PayloadAction<ResponseCommentType>) {
            state.comments = action.payload
        },
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
    }
})
export const CardsReducer = cardsSlice.reducer;
export const {setProductCardAC, setCommentsAC, setAppStatusAC} = cardsSlice.actions

export const getProductCard = (): AppThunkType => async dispatch => {
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const response = await API.productCard()

        dispatch(setProductCardAC(response))
        dispatch(setAppStatusAC({status: 'succeeded'}))
    } catch (error) {
        alert(error)
    }
}

export const getComments = (): AppThunkType => async dispatch => {
    dispatch(setAppStatusAC({status: 'loading'}))
    try {
        const response = await API.feedbacks()
        dispatch(setCommentsAC(response))
        dispatch(setAppStatusAC({status: 'succeeded'}))
    } catch (error) {
        alert(error)
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
