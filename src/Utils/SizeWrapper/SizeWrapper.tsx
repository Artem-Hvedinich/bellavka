import React from 'react';
import styled from './SizeWrapper.module.css'

interface WrapperType {
    isActual?: boolean
    value: string
}

export const SizeWrapper = ({value}: WrapperType) => {
    return (
        <div className={`${styled.wrapper} jc_ai_center`}>
            {value}
        </div>
    );
};