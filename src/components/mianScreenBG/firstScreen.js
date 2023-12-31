import { useContext } from 'react'
import TvboxSVG  from '../TvboxSVG'
import './firstScreen.css'
import OrderInputs from './orderInput'

import { ModalContext } from '../modalContext'

export default function FirstScreen(){

    const {firstScreenClass} = useContext(ModalContext)

    return(
    <>
        <div className={firstScreenClass}>
            <div className='firsrScreen_inner'>
                <div className='main_title'>
                    <h1>საკაბელო ტელევიზიის ჭკვიანური ალტერნატივა</h1>
                    <p>140 არხი დაპაუზება-გადახვევით. მილიონზე მეტი ვიდეო და ფილმი, ახალი ამბები, 
                        რადიო და YouTube აპლიკაცია ნებისმიერი ტელევიზორისთვის!
                    </p>
                </div>

                < TvboxSVG  />
                <OrderInputs />
            </div>
        </div>
    </>
    )
}