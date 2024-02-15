import React from 'react';
import s from "./Nav.module.css"
export const Nav = () => {
    return (
        <div className={s.main}>
            <button>about me</button>
            <button>my interests</button>
            <button>food</button>
            <button>dictionary</button>
        </div>
    );
};

