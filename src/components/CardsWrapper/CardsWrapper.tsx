import React from 'react';
import {useAppSelector} from "../store/store";
import {ResponseCardsType} from "../types/types";

export const CardsWrapper = () => {
    const cards = useAppSelector<ResponseCardsType>(state => state.CardsReducer.card)
    console.log(cards)
    return (
        <div>
            {cards.photos.map(photo => <img src={photo} alt={photo}/>)}
        </div>
    );
};

