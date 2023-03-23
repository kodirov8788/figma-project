import React from 'react'
import './Top_footer.scss';
import img from "./images/11.jpg"


function Top_footer() {
    return (
        <div className='container'>
            <div className="box">
                <h1>Support</h1>
                <h2>In case you have any questions or issues you can reach us via support@picksell.eu or by booking a call</h2>
                <p className='p2'>You will get answers to your question within 24 hours or less, Monday to Friday</p>
            </div>
            <div className="box2">
                <img src={img} alt="" />
            </div>

        </div >
    )
}

export default Top_footer