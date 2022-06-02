import React from 'react';
import {useAppSelector} from "../../store/store";
import {ResponseCardsType} from "../../types/cardTypes";
import {PhotoBlock} from './PhotoBlock/PhotoBlock';
import {LinkBlock} from "./LinkBlock/LinkBlock";
import {InfoBlock} from "./InfoBlock/InfoBlock";
import {MainFooter} from "../MainFooter/MainFooter";

export const Card = () => {
    const cards = useAppSelector<ResponseCardsType>(state => state.CardsReducer.card);

    if (!cards.id) {
        return <div>...Loading</div>
    }

    return (
        <div>
            <PhotoBlock cards={cards}/>
            <LinkBlock cards={cards}/>
            <InfoBlock cards={cards}/>
            <MainFooter/>
        </div>
    );
};

