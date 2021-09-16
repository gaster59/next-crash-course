import headerStyle from '../styles/Header.module.css';
import React from 'react';

const Header = () => {
    const x = 2;
    return (
        <div>
            <h1 className={headerStyle.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyle.description}>Keep up to date with the latest web dev news</p>
        </div>
    );
};

export default Header;