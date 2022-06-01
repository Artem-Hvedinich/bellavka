import React from 'react';
import styled from './MainFooter.module.css'
import {FooterMenu} from "../../store/localStore";



export const MainFooter = () => {
    return (
        <div className={styled.main_footer}>
            {FooterMenu.map((main, i) => <div onClick={()=>alert('Test Click')} className={styled.one_icon} key={i + main.text}>
                {main.img}
                <p className={styled.text}>{main.text}</p>
            </div>)}
        </div>
    )
}
