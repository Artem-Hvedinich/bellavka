import React from 'react';
import {DataType} from "../../../../types/commentType";
import styled from './AnswersBlock.module.css'
import {ArrowImg90} from "../../../../common/images/ArrowImg90";

export const AnswersBlock = ({data}: { data: DataType }) => {
    return (
        <div className={styled.answers_block}>
            <ArrowImg90/>
            <div className={styled.answers}>
                <div className={styled.answers_user}>
                    <img className={styled.user_img} alt={'ava'}
                         src={data.answers.map(m => m.photos).toString()}/>
                    <p>Беллавка</p>
                </div>
                <p className='min_margin'>{data.answers[0].value}</p>
            </div>
        </div>
    );
};
