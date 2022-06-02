import React from 'react';
import {useAppSelector} from "../../store/store";
import {ButtonBack} from "../../Utils/ButtonBack/ButtonBack";
import {NavLink} from "react-router-dom";
import {RatingBlock} from './RaitingBlock/RatingBlock';
import {MainFooter} from "../MainFooter/MainFooter";
import {LinkButton} from '../ReusedComponent/LinkButton/LinkButton';
import {OneCommentBlock} from "./OneCommentBlock/OneCommentBlock";

export const Comments = () => {
    const comments = useAppSelector(state => state.CardsReducer.comments)

    if (!comments.message) {
        return <div>...Loading</div>
    }

    return (
        <div style={{minHeight: "100vh"}}>
            <NavLink to={'/card'}><ButtonBack/></NavLink>
            <h2 style={{marginTop: '16px'}} className='jc_ai_center'>Отзывы</h2>
            <LinkButton/>
            <RatingBlock comments={comments}/>
            {comments.data.map(data => <OneCommentBlock data={data}/>)}
            <div style={{width: '100%',}} className={'jc_ai_center'}>
                <button onClick={() => alert('in progress')} className={'button_wrapper'}>Оставить отзыв</button>
            </div>
            <MainFooter/>
        </div>
    )
        ;
};
