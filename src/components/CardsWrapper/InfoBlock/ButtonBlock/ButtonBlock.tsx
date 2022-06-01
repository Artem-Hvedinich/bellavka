import React from 'react';
import styled from './ButtonBlock.module.css'
import {BasketImg} from "../../../../common/images/MainFooterImages/BasketImg";
import {ClickImg} from "../../../../common/images/ClickImg";

export const ButtonBlock = () => {
    return (
        <div className={styled.button_block}>
            <button onClick={() => alert('No work')} className={`${styled.button_buy} jc_ai_center`}>
                <ClickImg/>
                <p className={styled.text_wrapper}>Купить в 1 клик</p>
            </button>
            <button onClick={() => alert('No work')} className={`${styled.button_basket} jc_ai_center`}>
                <BasketImg/>
                <p className={styled.text_wrapper}>В корзину</p>
            </button>
        </div>
    );
};

