import React from 'react';
import {useAppSelector} from "../../store/store";
import {ResponseCardsType} from "../../types/cardTypes";
import {PhotoBlock} from './PhotoBlock/PhotoBlock';
import {LinkBlock} from "./LinkBlock/LinkBlock";
import {InfoBlock} from "./InfoBlock/InfoBlock";
import {MainFooter} from "../MainFooter/MainFooter";
import { ViewedStorage } from './ViewedStorage/ViewedStorage';

export const Card = () => {
    const cards = useAppSelector<ResponseCardsType>(state => state.CardsReducer.card);
    console.log(cards)
    if (!cards.id) {
        return <div className={'jc_ai_center'} style={{height:'100vh'}}>...Loading</div>
    }
    return (
        <div>
            <PhotoBlock cards={cards}/>
            <LinkBlock cards={cards}/>
            <InfoBlock cards={cards}/>
            <ViewedStorage cards={cards}/>
            <MainFooter/>
        </div>
    );
};

