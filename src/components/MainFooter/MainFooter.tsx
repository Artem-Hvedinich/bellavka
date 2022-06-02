import React from 'react';
import styled from './MainFooter.module.css'
import {MainImg} from "../../common/images/MainFooterImages/MainImg";
import {CatalogImg} from "../../common/images/MainFooterImages/CatalogImg";
import {BasketImg} from "../../common/images/MainFooterImages/BasketImg";
import {ProfileImg} from "../../common/images/MainFooterImages/ProfileImg";
import {ContactImg} from "../../common/images/MainFooterImages/ContactImg";
import {NavLink} from "react-router-dom";

export const FooterMenu = [
    {img: <MainImg/>, text: 'Главная', link: '/404'},
    {img: <CatalogImg/>, text: 'Каталог', link: '/card'},
    {img: <BasketImg/>, text: 'Корзина', link: '/404'},
    {img: <ProfileImg/>, text: 'Профиль', link: '/404'},
    {img: <ContactImg/>, text: 'Контакт', link: '/404'},
]

export const MainFooter = () => {
    const setStyled = (navData: any) => ({
        color: navData.isActive ? '#BD9365' : '#282828',
        fill: navData.isActive ? '#BD9365' : '#282828'
    })

    return (
        <div className={styled.main_footer}>
            {FooterMenu.map((main, i) => <NavLink style={setStyled} to={main.link}
                                                  className={styled.one_icon} key={i + main.text}>
                {main.img}
                <p className={styled.text}>{main.text}</p>
            </NavLink>)}
        </div>
    )
}
