import React from 'react';
import styles from './header.module.css'; // Импортируем CSS как модуль

function Header({props}) {
    return (
        <div className={styles.header}> {/* Используем стили как объект */}
            {props.who}
        </div>
    );
}

export default Header;
