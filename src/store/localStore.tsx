import {store} from "./store";
import {ReviewsImg} from "../common/images/ReviewsImg";

const cards = store.getState().CardsReducer.card
export const modalState = [
    {icon: <ReviewsImg/>, title: 'Смотреть видеообзоры', count: cards.videosCount},
    {title: 'Отзывы покупателей', count: cards.reviewsCount, icon: 's'},
    {title: 'Вопросы по модели', count: cards.questionsCount, icon: 's'}
]