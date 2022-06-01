import React from 'react';
import styled from './OneLinkBlock.module.css'
import {RightArrow} from "../../../../common/images/RightArrow";

interface ModalType {
    count: number
    title: string
    icon: any
    onClick: () => void
}

export const OneLinkBlock = ({count, title, icon, onClick}: ModalType) => {
    return (
        <div className={styled.modal} onClick={onClick}>
            <div className={styled.header_block}>
                <div className={styled.icon_count_block}>
                    {icon}
                    +{count}
                </div>
                <RightArrow/>
            </div>
            <div>{title}</div>
        </div>
    );
};