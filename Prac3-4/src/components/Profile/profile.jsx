import React from 'react';
import styles from './profile.module.css';
import {useParams} from "react-router-dom";

function Profile ({data}) {
    const { productId } = useParams();
    const addDataItem = data.additional.find(item => item.id.toString() === productId);

    if (!addDataItem) {
        return <div>User not found</div>;
    }

    return (
        <div className={styles.profile_container}> {/* Используем стили как объект */}
            <div className={styles.name}>
                Меня зовут {addDataItem.name} {addDataItem.surname}
            </div>
            <div className={styles.home}>
                Учусь в {addDataItem.home}
            </div>
            <div className={styles.parents}>
                Родители: {addDataItem.parents.mother} и {addDataItem.parents.father}
            </div>
            Моя фотография:
            <div className={styles.photo}>

                <div>
                    <img src={addDataItem.photo}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;
