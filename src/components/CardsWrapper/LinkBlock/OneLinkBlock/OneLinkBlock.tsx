import React from 'react';
import styled from './OneLinkBlock.module.css'
import {RightArrow} from "../../../../common/images/RightArrow";
import {NavLink} from "react-router-dom";

interface ModalType {
    count: number
    title: string
    icon: any
    link: string
}

export const OneLinkBlock = React.memo(({count, title, icon, link}: ModalType) => {
    return (
        <NavLink style={{color: '#BD9365'}} to={link}>
            <div className={styled.modal}>
                <div className={styled.header_block}>
                    <div className={styled.icon_count_block}>
                        {icon}
                        <p className={styled.count}>+{count}</p>
                    </div>
                    <RightArrow/>
                </div>
                <div>{title}</div>
            </div>
        </NavLink>
    );
})