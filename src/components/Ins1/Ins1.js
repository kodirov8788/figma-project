import React from 'react'
import "./Ins1.scss"
import number from "../../images/1.png"
function Ins1() {
    return (
        <div className='ins1'>
            <div className='ins_nav'>
                <h1>Installation</h1>
                <p>Installation includes three main steps:</p>
            </div>

            <div className='regis'>
                <div className="regis_wan">
                    <div className="regis_number">
                        <img src={number} alt="" />
                    </div>

                    <div className='regis_text'>
                        <h1>Registration
                            and verification
                            a Picksell Pay account</h1>

                        <p>Explore the docs</p>
                    </div>
                </div>

                <div className="regis_to">
                    <p>To activate a Picksell Pay account you need go through several simple steps:</p>

                    <div className='regis_ose'>
                        <div className='regis_div'></div>
                        <p>Register an account using your name and email address</p>
                    </div>


                    <div className='regis_ose'>
                        <div className='regis_div'></div>
                        <p>Choose a Picksell Pay plan</p>
                    </div>

                    <div className='regis_ose'>
                        <div className='regis_div'></div>
                        <p>Pass through basic company verification* (it requires your company registration number or your personal tax identification number If you are a freelancer or self-employed)</p>
                    </div>

                    <div className='regis_ose'>
                        <div className='regis_div'></div>
                        <p>Fill in public info about your store, company or brand</p>
                    </div>

                    <div className='regis_ose'>
                        <div className='regis_div'></div>
                        <p>Connect your bank account</p>
                    </div>

                    <h4>You can pass the steps in any order on your convenience.</h4>
                    <h4>Follow the link below to get more information about activating a PicksellPay account, basic and full verification.</h4>
                    <h4>Copy of Registration and verification of a PicksellPay account</h4>
                    <h5>*To activate a PicksellPay account it's enough to pass a basic verification. After a sum of payments accepted by your store will overdraw 10000 EUR you will be asked to pass through extra couple steps required to complete full verification. </h5>
                </div>
            </div>
        </div>
    )
}

export default Ins1