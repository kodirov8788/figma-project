import React from 'react'
import './TwoMedia.scss'
import './Two.scss'
function Two() {
    return (
        <div className='two-main'>
            <div className="two-left">
                <h1>2</h1>

                <div className="left-text">
                    <h2>
                        Setting up a Picksell Pay plugin in your PrestaShop
                    </h2>
                </div>
            </div>
            <div className="two-right">
                <div className="right1">
                    <div className="check"></div>
                    <p>Go to Tokens Page and create Merchant token (Api key) and Private key (secret), Merchant ID</p>
                </div>
                <div className="right1">
                    <div className="check"></div>
                    <p>Go to the Wordpress Admin Page</p>
                </div>
                <div className="right1">
                    <div className="check"></div>
                    <p>In the left bar go to Improve → Modules → Module <br /> Manager → Upload a module→ <span>Choose this prestashop_picksell_pay.zip file</span></p>
                </div>
                <div className="right1">
                    <div className="right4">
                        <div className="check"></div>
                        <p>Enter created Merchant ID, Api Key and Api Secret <br /> (secret), click Save</p>
                    </div>

                    <p className='P'>After that Picksell Pay will be activated as your payment method. You can configure it from the module section of the admin interface. Our team would love to help if you would face any issues.</p>
                </div>
            </div>
        </div>
    )
}

export default Two