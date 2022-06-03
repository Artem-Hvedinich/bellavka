import React from 'react';
import styled from './LinkButton.module.css'
import {NavLink} from "react-router-dom";

export const LinkButton = () => {
    const setStyled= (navData: any) => ({
        color: navData.isActive ? '#fff' : '#282828',
        background: navData.isActive ? '#BD9365' : '#F5F5F5',
        border: navData.isActive ? '' : '1px solid #DDDDDD'
    })

    return (
        <div className={styled.link_button_block}>
            <NavLink style={setStyled} className={styled.video} to={'/404'}>Видeooбзop </NavLink>
            <NavLink style={setStyled} className={styled.comments} to={'/comments'}>Отзывы </NavLink>
            <NavLink style={setStyled} className={styled.questions} to={'/404'}>Вопросы </NavLink>
        </div>

    );
};
