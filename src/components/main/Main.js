import React from 'react'
import "./Main.scss"
import main_img from "../../images/main.svg"
import half_img from "../../images/half2_img.svg"
import footer_img from "../../images/footerimg.svg"
import footer_img2 from "../../images/footerimg2.svg"
import img2 from "../../images/mainimg2.svg"
function Main() {
    return (
        <div className='main'>
            <div className="main_main">
                <div className="main_half1">
                    <div className="half1_text">
                        <div className="main_text1">
                            <img src={main_img} alt="" />
                            <div className="text1_text">
                                <h2><span>PrestaShop</span> Module</h2>
                                <h2>for SEPA bank</h2>
                            </div>
                        </div>
                        <div className="main_text2">
                            <h2> transfers acceptance</h2>
                        </div>
                        <div className="main_text3">
                            <p>The most profitable and fastest way to accept payment in your store</p>
                        </div>
                        <div className="main_text4">
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="main_half2">

                    <div className="half2_img">
                        <img src={half_img} alt="" />
                        <img src={img2} alt="" className='img2' />
                    </div>
                </div>
            </div>
            <div className="main_footer">
                <div className="footer_img1">
                    <img src={footer_img2} alt="" />
                </div>
                <div className="footer_img2">
                    <img src={footer_img} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Main