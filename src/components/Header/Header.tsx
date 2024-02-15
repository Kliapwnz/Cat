import React from 'react';
import cat from '../../img/IMG_E8388.png'
import s from './Header.module.css'

export const Header = () => {
    return (
        <div >
            <img src={cat} alt="cat" className={s.img}/>
        </div>
    );
};

