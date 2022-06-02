import React from 'react';
import styled from './ViewedStorage.module.css'
import {OneViewedStorageBlock} from './OneViewedStorageBlock/OneViewedStorageBlock';

type sessionStore = {
    retail: number
    retailOld: number
    name: string
    kits: string
    img: string

}

export const ViewedStorage = ({sessionStore}: { sessionStore: sessionStore[] }) => {

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

