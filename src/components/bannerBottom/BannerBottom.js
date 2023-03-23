import React from 'react'
import "../bannerBottom/BannerBottom.scss"
import img from '../../images/img002.png'
function BannerBottom() {
    return (
        <div className='BannerBottom'>
            <h1 className='BannerBottomTextFont'>Why you should choose Picksell Pay</h1>
            <div className="BannerBottomTop">
                <div className="BannerBottomLeft">
                    <img src={img} alt="" />
                </div>
                <div className="BannerBottomRight">
                    <div className="productIcons">
                        <img src="https://w7.pngwing.com/pngs/38/204/png-transparent-computer-icons-check-mark-true-or-false-miscellaneous-company-logo.png" alt="" />
                        <h2>€0 monthly cost</h2>
                    </div>
                    <div className="productIcons">
                        <img src="https://w7.pngwing.com/pngs/38/204/png-transparent-computer-icons-check-mark-true-or-false-miscellaneous-company-logo.png" alt="" />
                        <h2>Transaction fees less than 1%</h2>
                    </div>
                    <div className="productIcons">
                        <img src="https://w7.pngwing.com/pngs/38/204/png-transparent-computer-icons-check-mark-true-or-false-miscellaneous-company-logo.png" alt="" />
                        <h2>Faster to receive money on account than with cards!</h2>
                    </div>
                    <div className="productIcons">
                        <img src="https://w7.pngwing.com/pngs/38/204/png-transparent-computer-icons-check-mark-true-or-false-miscellaneous-company-logo.png" alt="" />
                        <h2>No hidden fees, you pay only when you make a sale</h2>
                    </div>
                    <div className="productIcons">
                        <img src="https://w7.pngwing.com/pngs/38/204/png-transparent-computer-icons-check-mark-true-or-false-miscellaneous-company-logo.png" alt="" />
                        <h2>No chargebacks, no deposits, no acquiring, no intermediaries</h2>
                    </div>
                    <div className="productIcons">
                        <img src="https://w7.pngwing.com/pngs/38/204/png-transparent-computer-icons-check-mark-true-or-false-miscellaneous-company-logo.png" alt="" />
                        <h2>Everyday unlimited direct payments into your bank account</h2>
                    </div>
                    <div className="productIcons">
                        <img src="https://w7.pngwing.com/pngs/38/204/png-transparent-computer-icons-check-mark-true-or-false-miscellaneous-company-logo.png" alt="" />
                        <h2>No bank cards, no need to enter long numbers</h2>
                    </div>
                    <div className="productIcons">
                        <img src="https://w7.pngwing.com/pngs/38/204/png-transparent-computer-icons-check-mark-true-or-false-miscellaneous-company-logo.png" alt="" />
                        <h2>Fully GDPR and SCA compliant, customer data is always protected</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BannerBottom