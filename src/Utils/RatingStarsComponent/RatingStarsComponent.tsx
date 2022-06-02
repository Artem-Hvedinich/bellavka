import React from 'react';

export const RatingStarsComponent = ({rating, margin}: { rating: string | number, margin?: number }) => {
    return (
        <div>
            <span style={{color: `${rating > 0 ? '#FFBF31' : '#DDDDDD'}`, margin: `${margin}px`}}
                  className={`fa fa-star`}/>
            <span style={{color: `${rating > 1 ? '#FFBF31' : '#DDDDDD'}`, margin: `${margin}px`}}
                  className={`fa fa-star`}/>
            <span style={{color: `${rating > 2 ? '#FFBF31' : '#DDDDDD'}`, margin: `${margin}px`}}
                  className={`fa fa-star`}/>
            <span style={{color: `${rating > 3 ? '#FFBF31' : '#DDDDDD'}`, margin: `${margin}px`}}
                  className={`fa fa-star`}/>
            <span style={{color: `${rating > 4 ? '#FFBF31' : '#DDDDDD'}`, margin: `${margin}px`}}
                  className={`fa fa-star`}/>
        </div>
    );
};
