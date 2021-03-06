import React from 'react';
import styled from './OneCommentBlock.module.css'
import {RatingStarsComponent} from "../../../utils/RatingStarsComponent/RatingStarsComponent";
import {DataType} from '../../../types/commentType';
import {AnswersBlock} from './AnswersBlock/AnswersBlock';

export const OneCommentBlock = ({data}: { data: DataType }) => {
    // Проверка на наличее фото пользвателя
    const checkPhoto = data.user.photo ? data.user.photo : 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png'

    const clearData = data.createdDate.slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)

    return (
        <div className={styled.one_comment}>

            <div className={styled.personal_info}>
                <div className={'jc_ai_center'}>
                    <img className={styled.user_img} src={checkPhoto} alt={checkPhoto}/>
                    <p>{data.user.name}</p>
                </div>
                <p className={styled.data_block}>{clearData}</p>
            </div>

            {/*Проверка на наличие отзыва по размеру*/}
            {data.characteristics.length !== 0 && <p className={styled.characteristics}>{data.characteristics}</p>}

            <div style={{fontSize: '21px'}} className={'min_margin'}>
                <RatingStarsComponent margin={2} rating={data.rating}/>
            </div>

            <p className={'text_wrap'}>{data.value}</p>

            <div>
                {data.photos.length !== 0 && data.photos.map((p: string, i: React.Key) =>
                    <img key={i + p} className={styled.feedback_photo} src={p} alt={p}/>).slice(1)}
            </div>
            {data.answers.length !== 0 && <AnswersBlock data={data}/>}
        </div>
    )
}