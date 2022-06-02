import React, {useState} from 'react';
import styled from './OneViewedStorageBlock.module.css'
import {BasketImg} from "../../../../common/images/MainFooterImages/BasketImg";
import {LikeImg} from "../../../../common/images/LikeImg";

interface ViewedType {
    retail: number
    retailOld: number
    name: string
    kits: string
    img: string
}

export const OneViewedStorageBlock = ({retail, retailOld, name, kits, img}: ViewedType) => {
    const [like, setLike] = useState(false)
    const onClickHandler = () => setLike(!like)

    return (
        <div className={styled.viewed_block}>
            <div className={styled.like}><LikeImg onClick={onClickHandler} like={like}/></div>
            <img className={styled.viewed_img} src={img} alt={img}/>
            <div className={styled.info_block}>
                <div>
                    <div className={styled.price_block}>
                        <p className={styled.retail}>{retail}</p>
                        <p className={styled.retail_old}>{retailOld}</p>
                    </div>
                    <p className={`${styled.name}`}>{name}</p>
                    <p className={styled.kits}>{kits}</p>
                </div>
                <div className={'min_margin'}><BasketImg/></div>
                <div className={`fa fa-plus ${styled.plus}`}/>
            </div>
        </div>
    )
}

