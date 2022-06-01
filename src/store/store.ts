import {configureStore, ThunkAction} from '@reduxjs/toolkit';
import {Action, AnyAction, combineReducers} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {CardsReducer} from "./reducer";

export type AppRootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    CardsReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;


// Type on the Dispatch
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>;
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, Action>;
// export const useTypedDispatch = () => useDispatch<TypedDispatch>();
// @ts-ignore
window.store = store