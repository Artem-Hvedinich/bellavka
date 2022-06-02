import React from 'react';
import styled from './OneLinkBlock.module.css'
import {RightArrow} from "../../../../common/images/RightArrow";
import {NavLink} from "react-router-dom";

interface ModalType {
    modal: {
        count: number
        title: string
        icon: any
        link: string
    }
}

export const OneLinkBlock = React.memo(({modal}: ModalType) => {
    return (
        <NavLink style={{color: '#BD9365'}} to={modal.link}>
            <div className={styled.modal}>
                <div className={styled.header_block}>
                    <div className={styled.icon_count_block}>
                        {modal.icon}
                        <p className={styled.count}>+{modal.count}</p>
                    </div>
                    <RightArrow/>
                </div>
                <div>{modal.title}</div>
            </div>
        </NavLink>
    );
})