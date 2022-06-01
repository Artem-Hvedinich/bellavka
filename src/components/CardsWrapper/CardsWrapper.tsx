import React from 'react';
import {useAppSelector} from "../../store/store";
import {ResponseCardsType} from "../../types/types";
import {PhotoBlock} from './PhotoBlock/PhotoBlock';
import {LinkBlock} from "./LinkBlock/LinkBlock";
import {InfoBlock} from "./InfoBlock/InfoBlock";

export const CardsWrapper = () => {
    const cards = useAppSelector<ResponseCardsType>(state => state.CardsReducer.card)
    console.log('CardsWrapper rendered', cards)

    return (
        <div>
            <PhotoBlock photos={cards.photos}
                        salePercent={cards.salePercent}
                        video={cards.videos[0]["540p"]}/>
            <LinkBlock cards={cards}/>
            <InfoBlock cards={cards}/>
        </div>
    );
};

