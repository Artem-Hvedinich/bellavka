import {store} from "./store";
import {ReviewsImg} from "../common/images/ReviewsImg";
import {MainImg} from "../common/images/MainImg";
import {CatalogImg} from "../common/images/CatalogImg";
import {BasketImg} from "../common/images/BasketImg";
import {ProfileImg} from "../common/images/ProfileImg";
import {ContactImg} from "../common/images/ContactImg";
import React from "react";
import {VideoClipImg} from "../common/images/VideoClipImg";
import {Question} from "../common/images/Question";

const cards = store.getState().CardsReducer.card

export const modalState = [
    {
        title: 'Смотреть видеообзоры', count: cards.videosCount, icon: <VideoClipImg/>,
        onClick: () => {
            alert('no work')
        }
    },
    {
        title: 'Отзывы покупателей', count: cards.reviewsCount, icon: <ReviewsImg/>,
        onClick: () => {
            alert('no work')
        }
    },
    {
        title: 'Вопросы по модели', count: cards.questionsCount, icon: <Question/>,
        onClick: () => {
            alert('no work')
        }
    }
]

export const FooterMenu = [
    {img: <MainImg/>, text: 'Главная'},
    {img: <CatalogImg/>, text: 'Каталог'},
    {img: <BasketImg/>, text: 'Корзина'},
    {img: <ProfileImg/>, text: 'Профиль'},
    {img: <ContactImg/>, text: 'Контакт'},
]