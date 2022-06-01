import React from 'react';
import styles from './PhotoBlock.module.css'
import {ButtonBack} from "../../../Utils/ButtonBack/ButtonBack";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import {SearchImg} from "../../../common/images/SearchImg";

interface PhotoType {
    photos: [],
    salePercent: number,
    video?: string
}


export const PhotoBlock = React.memo(({photos, salePercent, video}: PhotoType) => {

        const mySlidesPerView = (window.innerWidth / 250).toFixed(2);
        console.log(mySlidesPerView)
        let mappingPhoto = photos.map(photo =>
            <SwiperSlide>
                <img className={styles.photo}
                     src={photo}
                     alt={photo}
                />
            </SwiperSlide>
        )
        mappingPhoto = [mappingPhoto[0],
            <SwiperSlide>
                <video src={video} autoPlay muted loop>
                </video>
            </SwiperSlide>,
            ...mappingPhoto.slice(1, 12)]


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
                <div className={styles.sale}>{`-${salePercent}%`}</div>
                <ButtonBack onClick={() => {
                    alert('Sorry, this button in progress')
                }}/>
                <SearchImg/>
            </div>
        )
            ;
    }
)
