import TvboxSVG  from '../TvboxSVG'
import './firstScreen.css'
import OrderInputs from './orderInput'

export default function FirstScreen(){
    return(
    <>
        <div className="firstScreen">
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