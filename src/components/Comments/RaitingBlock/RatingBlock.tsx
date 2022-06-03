import React from 'react';
import styled from './RatingBlock.module.css'
import {ResponseCommentType} from "../../../types/commentType";
import {SizesRating} from './SizesRating/SizesRating';
import {RatingStarsComponent} from "../../../utils/RatingStarsComponent/RatingStarsComponent";

export const RatingBlock = React.memo(({comments}: { comments: ResponseCommentType }) => {

    const rating = Math.ceil(+comments.statistics.rating.rating)

    return (
        <div className={`${styled.rating_block} jc_ai_center`}>
            <div style={{fontSize: '27px'}}><RatingStarsComponent margin={10} rating={rating}/></div>
            <div>{comments.meta.total} отзывов</div>
            {comments.statistics.size.map(m =>
                <SizesRating name={m.name} percent={m.percent}/>)}
        </div>
    );
})
