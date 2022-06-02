import React, {FC} from 'react';
import styles from './PhotoBlock.module.css'
import {ButtonBack} from "../../../Utils/ButtonBack/ButtonBack";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import {SearchImg} from "../../../common/images/SearchImg";
import {ResponseCardsType} from "../../../types/cardTypes";

type PropsType = {
    cards: ResponseCardsType
}

export const PhotoBlock: FC<PropsType> = React.memo(({cards}) => {

        //Контролирует количество фотографий
        const mySlidesPerView = (window.innerWidth / 250).toFixed(2);

        // Мапит фото и добавляет видео в массив
        let mappingPhoto = cards.photos.map((photo, i) =>
            <SwiperSlide key={photo + i}>
                <img className={styles.photo}
                     src={photo}
                     alt={photo}
                />
            </SwiperSlide>
        )
        mappingPhoto = [mappingPhoto[0],
            <SwiperSlide key={cards.videos[0].adaptive}>
                <video src={cards.videos[0]["540p"]} autoPlay muted loop>
                </video>
            </SwiperSlide>,
            ...mappingPhoto.slice(1, 12)] //битое фото обрезал слайсом

        return (
            <div className={styles.photo_block}>
                <Swiper
                    className={styles.swiper}
                    modules={[Pagination]}
                    slidesPerView={+mySlidesPerView}
                    slidesPerGroup={1}
                    pagination={{clickable: true}}
                >
                    {mappingPhoto}

                </Swiper>
                <div className={styles.sale}>{`-${cards.salePercent}%`}</div>
                <ButtonBack onClick={() => {
                    alert('Sorry, this button in progress') //Заглушка
                }}/>
                <SearchImg/>
            </div>
        )
    }
)
