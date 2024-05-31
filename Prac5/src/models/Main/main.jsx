import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function Main() {

    const dispatch = useDispatch();
    const cash = useSelector(state => state.red.cash);

    function addCash(cash) {
        dispatch({type: "ADD_CASH", payload: cash});
    }

    function getCash(cash) {
        dispatch({type: "GET_CASH", payload: cash});
    }

    return (
        <div className="Agreement">
            <div style={{fontSize: '2rem'}}>{cash}</div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    columnGap: '20px',
                    justifyContent: 'center',
                    height: '50px',
                    alignItems: "center"
                }}>
                    <button onClick={() => addCash(Number(prompt()))} style={{height: '50px'}}>Пополнить счет</button>
                    <button onClick={() => getCash(Number(prompt()))} style={{height: '50px'}}>Снять со счета</button>
                </div>
        </div>
    );
}

export default Main;
