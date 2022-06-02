import React from 'react';
import styled from './SizesRating.module.css'

export const SizesRating = ({name, percent}: { name: string, percent: string }) => {
    const newPercent = parseInt(percent)
    return (
        <div className={styled.size_block}>
            <span className={styled.name}>{name}</span>
            <div className={styled.percent_block}>
                <p className={styled.line}>
                    <p style={{width: `${newPercent}%`}} className={styled.line_percent}/>
                </p>
                <span>{newPercent}%</span>
            </div>
        </div>
    );
};
