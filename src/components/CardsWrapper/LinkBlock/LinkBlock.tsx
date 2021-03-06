import React, {useState} from 'react';
import styles from './LinkBlock.module.css'
import {OneLinkBlock} from "./OneLinkBlock/OneLinkBlock";
import {VideoClipImg} from "../../../common/images/LinkImages/VideoClipImg";
import {ReviewsImg} from "../../../common/images/LinkImages/ReviewsImg";
import {Question} from "../../../common/images/LinkImages/Question";
import {ResponseCardsType} from "../../../types/cardTypes";
import {ShareImg} from "../../../common/images/LinkImages/ShareImg";
import {CottonImg} from "../../../common/images/LinkImages/CottonImg";
import {LikeImg} from "../../../common/images/LikeImg";

export const LinkBlock = React.memo(({cards}: { cards: ResponseCardsType }) => {
    const [like, setLike] = useState(false)
    const onClickHandler = () => setLike(!like)

    const modalState = [
        {title: 'Смотреть видеообзоры', count: cards.videosCount, icon: <VideoClipImg/>, link: '/404'},
        {title: 'Отзывы покупателей', count: cards.reviewsCount, icon: <ReviewsImg/>, link: '/comments',},
        {title: 'Вопросы по модели', count: cards.questionsCount, icon: <Question/>, link: '/404',}
    ]

    return (
        <div className={styles.main_link_block}>
            <div className={styles.info_link_block}>
                <div className={styles.link_block}>
                    <LikeImg onClick={onClickHandler} like={like}/>
                    <a href={cards.url} target='_blank'>
                        <ShareImg/></a>
                </div>
                
                <div className={styles.die_block}>
                    <div className={styles.best}>#лучшее</div>
                    <div className={styles.available}>{cards.status}</div>
                    <div className={styles.cotton}>
                        <CottonImg/>
                        хлопок
                    </div>
                </div>
            </div>

            <div className={styles.modal_block}>
                {modalState.map(modal =>
                    <OneLinkBlock modal={modal}/>
                )}
            </div>
        </div>
    );
})

