import React from 'react';
import cat from '../../img/IMG_E8388.png'
import s from './Header.module.css'
import {Nav} from "./Nav/Nav";

export const Header = () => {
    return (
        <>
            <img src={cat} alt="cat" className={s.img}/>
            <Nav/>
        </>
    );
};

