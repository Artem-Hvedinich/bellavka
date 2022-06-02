import React from 'react';
import styled from './ViewedStorage.module.css'
import {ResponseCardsType} from "../../../types/cardTypes";
import {OneViewedStorageBlock} from './OneViewedStorageBlock/OneViewedStorageBlock';

export const ViewedStorage = ({cards}: { cards: ResponseCardsType }) => {

    let sessionStore = [];
    let get = sessionStore.unshift({
        retail: cards.price.retail,
        retailOld: cards.price.retailOld,
        name: cards.brand.value,
        kits: cards.kits.map(m => m.value).join(', '),
        img: cards.photos.slice(0, 1).toString()
    });
    //@ts-ignore
    JSON.parse(sessionStorage.getItem(get));
    sessionStorage.setItem('ViewedStorageArray', JSON.stringify(sessionStore));

    return (
        <div className={` large_margin`}>
            <h2 className={styled.title}>Вы недавно смотрели</h2>
            <div className={'infinity_scroll_block'}>
                {sessionStore.map((store, i) =>
                    <OneViewedStorageBlock
                        key={store.retail + i}
                        name={store.name}
                        img={store.img}
                        retail={store.retail}
                        retailOld={store.retailOld}
                        kits={store.kits}
                    />)}
            </div>
        </div>
    )
}

