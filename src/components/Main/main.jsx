import React from 'react';
import Header from "../Header/header";
import Based from "../Based/based";
import Footer from "../Footer/footer";
import styles from './main.module.css';
import { useParams } from "react-router-dom";

const Main = ({ data }) => {
    const { Id } = useParams();
    const baseData = data.base.find(item => item.id.toString() === Id);
    const addData = data.additional;

    return (
        <div className={styles.main}>
            <Header props={baseData} />
            <Based />
            <Footer addData={addData} />
        </div>
    );
}

export default Main;
