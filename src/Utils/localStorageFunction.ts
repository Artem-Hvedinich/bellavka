import {ResponseCardsType} from "../types/cardTypes";

export function localStorageFunction(cards: ResponseCardsType) {
    //@ts-ignore
    let sessionStore = JSON.parse(sessionStorage.getItem('ViewedStorageArray')) || [];
    sessionStore.unshift({
        retail: cards.price.retail,
        retailOld: cards.price.retailOld,
        name: cards.brand.value,
        kits: cards.kits.map(m => m.value).join(', '),
        img: cards.photos.slice(0, 1).toString()
    });
    sessionStore.length > 10 && sessionStore.pop()
    sessionStorage.setItem('ViewedStorageArray', JSON.stringify(sessionStore));
    return sessionStore
}