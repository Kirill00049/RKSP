import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function Agreement() {
    const dispatch = useDispatch();
    const agree = useSelector((state) => state.check.agree);

    const checkboxHandler = (event) => {
        const isChecked = event.target.checked;
        if (isChecked) {
            dispatch({type: "YES", payload: agree});
        }
        if (!isChecked) {
            dispatch({type: "NO", payload: agree});
        }
    }

    return (
        <div className="Agreement">
            <div style={{display: 'flex',flexDirection: "column", justifyContent: 'center', alignItems:"center", height: "300px"} }>

                <label htmlFor="agree"><input type="checkbox" id="agree" onChange={checkboxHandler}/>
                    I agree to <b>terms
                    and conditions</b>
                </label>
                <div style={{marginTop: "15px"}}>
                    <a href="/main">
                            <button disabled={!agree} className="btn">
                                Continue
                            </button>
                        </a>
                </div>
            </div>
        </div>
    );
}

export default Agreement;
