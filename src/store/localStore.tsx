import {MainImg} from "../common/images/MainFooterImages/MainImg";
import {CatalogImg} from "../common/images/MainFooterImages/CatalogImg";
import {BasketImg} from "../common/images/MainFooterImages/BasketImg";
import {ProfileImg} from "../common/images/MainFooterImages/ProfileImg";
import {ContactImg} from "../common/images/MainFooterImages/ContactImg";
import React from "react";


export const FooterMenu = [
    {img: <MainImg/>, text: 'Главная'},
    {img: <CatalogImg/>, text: 'Каталог'},
    {img: <BasketImg/>, text: 'Корзина'},
    {img: <ProfileImg/>, text: 'Профиль'},
    {img: <ContactImg/>, text: 'Контакт'},
]