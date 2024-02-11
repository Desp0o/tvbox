import { useEffect } from 'react'
import './payment.css'

import FooterBanner from '../components/footerBanner/footerBanner'
import cards from '../components/images/plastic_card.webp'
import paypal from '../components/images/paypal.webp'
import paybox from '../components/images/terminal.webp'
import eMoney from '../components/images/emoney.webp'
import bank from '../components/images/bank.webp'

const paymentArr = [
    {
        img: `${cards}`,
        text: 'პლასტიკური ბარათით'
    },

    {
        img: `${paypal}`,
        text: 'PayPal'
    },

    {
        img: `${paybox}`,
        text: 'გადახდის აპარატები'
    },

    {
        img: `${eMoney}`,
        text: 'eMoney'
    },

    {
        img: `${bank}`,
        text: 'საბანკო გადარიცხვა'
    },
]

export default function Payment(){

    useEffect(()=>{
        document.body.style.overflow='auto'
    },[])

    return(
        <>
            <div className='payment'>
                <div className='payment_inner'>
                    <div className="devicePage_cover" />

                    <div className='payment_title_txt'>
                        <div className="device_title">გადახდა</div>

                        <p className='payment_desc'>მომსახურების ღირებულების გადახდა შესაძლებელია myvideo.ge-ს <a className='paymentLink' href='https://www.myvideo.ge/c/balance' target='_blank' rel="noreferrer">ანგარიშის ბალანსიდან.</a></p>
                        <p className='payment_desc'>ბალანსის შევსება შესაძლებელია სხვადასხვა კომფორტული მეთოდით.</p>
                    </div>

                    <div className='payment_methods'>
                        {
                            paymentArr.map((method, index) => {
                                return(
                                    
                                     <div className='payment_methods_block' key={index}>
                                        <img src={method.img} alt='payment method' />
                                        <p>{method.text}</p>
                                    </div>
                                    
                                )
                            })
                        }
                       
                    </div>
                </div>
                <FooterBanner />
            </div>
            
        </>
    )
}