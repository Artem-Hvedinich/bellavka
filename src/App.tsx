import React, {useEffect} from 'react';
import './App.css';
import {getProductCard} from "./store/reducer";
import {useDispatch} from "react-redux";
import {TypedDispatch, useAppSelector} from './store/store';
import {CardsWrapper} from "./components/CardsWrapper/CardsWrapper";
import {MainFooter} from './components/MainFooter/MainFooter';

function App() {
    console.log('App rendered')
    const status = useAppSelector(state => state.CardsReducer.status)
    const dispatch = useDispatch<TypedDispatch>();

    useEffect(() => {
        dispatch(getProductCard())
    }, [dispatch])

    if (status === 'loading') {
        return <div>...Loading</div>
    }

    return (
        <div className='App'>
            <CardsWrapper/>
            <MainFooter/>
        </div>
    )
}

export default App;
