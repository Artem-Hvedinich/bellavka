import React from 'react';
import {useAppSelector} from "../../store/store";
import {ResponseCardsType} from "../../types/cardTypes";
import {PhotoBlock} from './PhotoBlock/PhotoBlock';
import {LinkBlock} from "./LinkBlock/LinkBlock";
import {InfoBlock} from "./InfoBlock/InfoBlock";
import {MainFooter} from "../MainFooter/MainFooter";
import {ViewedStorage} from './ViewedStorage/ViewedStorage';
import {localStorageFunction} from '../../Utils/localStorageFunction';

export const Card = () => {
    const cards = useAppSelector<ResponseCardsType>(state => state.CardsReducer.card);

    if (!cards.id)
        return <div className={'jc_ai_center'} style={{height: '100vh'}}>...Loading</div>

    //функция работает с Session Storage + обрезает до нужного нам количества
    const sessionStorage = localStorageFunction({
        retail: cards.price.retail,
        retailOld: cards.price.retailOld,
        name: cards.brand.value,
        kits: cards.kits.map(m => m.value).join(', '),
        img: cards.photos.slice(0, 1).toString()
    }, 5)

    return (
        <div>
            <PhotoBlock cards={cards}/>
            <LinkBlock cards={cards}/>
            <InfoBlock cards={cards}/>
            <ViewedStorage sessionStore={sessionStorage}/>
            <MainFooter/>
        </div>
    );
};

