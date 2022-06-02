import React, {useState} from 'react';
import {ResponseCardsType} from "../../../types/cardTypes";
import {SizeWrapper} from "../../../Utils/SizeWrapper/SizeWrapper";
import styled from './InfoBlock.module.css'
import {ButtonBlock} from "./ButtonBlock/ButtonBlock";
import {MoreImg} from "../../../common/images/MoreImg";

export const InfoBlock = React.memo(({cards}: { cards: ResponseCardsType }) => {
    const [modalPrice, setModalPrice] = useState(false)
    const [modalSize, setModalSize] = useState(false)

    return (
        <div className={styled.info_block}>
            <div>
                <h1 className={styled.full_name}>{cards.fullName}</h1>
                <p className={styled.kit}>{cards.kits.map(kit => kit.value).join(', ')}</p>
            </div>

            <div className={`${styled.price_block} middle_margin`}>
                <div className={styled.price_block_number}>
                    <p className={styled.retail}>{cards.price.retail}₽</p>
                    <p className={styled.retail_old}>{cards.price.retailOld}₽</p>
                </div>
                <div className={'jc_ai_center'} onClick={() => setModalPrice(!modalPrice)}>
                    <p className={styled.more}>Подробнее</p>
                    <MoreImg/>
                </div>

            </div>

            {modalPrice && <div style={{border: '1px solid black'}}>
                <b>TEST MODAL OF PRICE</b><br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            </div>}

            <div className={`${styled.size_wrapper_text} min_margin`}><h2>Размеры: </h2>
                <p onClick={() => setModalSize(!modalSize)} className={styled.table_size}>Таблица размеров</p>
            </div>

            {modalSize && <div style={{border: '1px solid black'}}>
                <b>TEST MODAL OF SIZE</b><br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            </div>}

            <div className={styled.size_block}>
                {cards.sizes.map(size =>
                    <SizeWrapper key={size.id} isActual={size.isActual} value={size.value}/>).slice(0, 8)}
            </div>

            <div className={'middle_margin'}>
                <h2 className={'min_margin'}>Рост: </h2>
                <div className={styled.size_block}>
                    {cards.heights.map(height =>
                        <SizeWrapper key={height.id} value={height.value}/>)}
                </div>
            </div>
            <ButtonBlock/>
            <div className={'middle_margin'}>
                <h2 className={'min_margin'}>Цвета:</h2>
                <div>
                    <img style={{border: `${cards.isActive ? '1px solid #282828' : 'none'}`}} className={styled.colors}
                         src={cards.photos.slice(0, 1).toString()} alt={cards.photos.slice(0, 1).toString()}/>
                </div>
            </div>
        </div>
    );
})

