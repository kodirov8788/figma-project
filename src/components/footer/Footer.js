import React from 'react'
import './Footer.scss'
import './Footermed.scss'
import img1 from "./img1.png"
import img2 from "./img2.png"
function Footer() {
    return (
        <div className='foter'>
            <div className="f1">
                <img className='img1' src={img1} alt="" />
                <img className='img2' src={img2} alt="" />
            </div>
            <div className="g">
                <div className="f2">
                    <ul className="ul1">
                        <li className="li">Information</li>
                        <li className="li">Legal info</li>
                        <li className="li">Pirivacy policy</li>
                        <li className="li">Coocies policy</li>
                        <li className="li">Term and conditions</li>
                    </ul>
                </div>
                <div className="f3">
                    <ul className="ul1">
                        <li className="li">More info</li>
                        <li className="li">SHopping</li>
                        <li className="li">Showrooms</li>
                        <li className="li">PIcksel pay</li>
                        <li className="li">Catlogue</li>
                    </ul>
                </div>
            </div>
            <div className="f4">
                <ul className="ul1">
                    <li className="li">Contact us</li>
                    <li className="li">+44 7481 344910</li>
                    <li className="li">info@picksell.eu</li>
                    <li className="li">Unit 111379, Second Floor, 6 Market Place, London, Fitzrovia, United Kingdom</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer