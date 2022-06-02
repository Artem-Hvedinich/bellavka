import React from 'react';
import {NavLink} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <div style={{flexDirection: 'column', height: '100vh'}} className={'jc_ai_center'}>
            <h1>404</h1>
            <h4>Not Found</h4>
            <p>This Page in progress</p>
            <NavLink style={{color: '#BD9365'}} to={'/card'}>на главную</NavLink>
        </div>
    );
};
