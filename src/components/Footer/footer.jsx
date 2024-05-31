import React from 'react';
import styles from './footer.module.css';
import { useParams } from "react-router-dom";

function Footer ({ addData }) {
    const { Id } = useParams();
    const addDataItem = addData.find(item => item.id.toString() === Id);

    if (!addDataItem) {
        return <div>User not found</div>;
    }

    let path = "/profile/" + addDataItem.id;

    return (
        <div className={styles.footer}>
            <a href={path}>{addDataItem.name}</a>
            <div className={styles.flexPutin}>
                <div className={styles.putin}></div>
                <div className={styles.cat}></div>
            </div>
        </div>
    );
}

export default Footer;
