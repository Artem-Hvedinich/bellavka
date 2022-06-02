import React, {useEffect} from 'react';
import './App.css';
import {getComments, getProductCard} from "./store/reducer";
import {useDispatch} from "react-redux";
import {TypedDispatch} from './store/store';
import {Card} from "./components/CardsWrapper/Card";
import {Navigate, Route, Routes} from "react-router-dom";
import {Comments} from "./components/Comments/Comments";
import {ErrorPage} from "./components/ErrorPage";

function App() {
    console.log('App rendered')

    const dispatch = useDispatch<TypedDispatch>();
    useEffect(() => {
        dispatch(getProductCard())
        dispatch(getComments())
    }, [])

    return (
        <div className='App'>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/card'}/>}/>
                <Route path={'/card'} element={<Card/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
                <Route path={'/404'} element={<ErrorPage/>}/>
            </Routes>
        </div>
    )
}

export default App;
