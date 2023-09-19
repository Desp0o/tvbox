import { useState } from "react"
import FooterBanner from '../components/footerBanner/footerBanner'
import "./faq.css"

import dropDownArrow from '../components/images/dropdown_arrow.png'

export default function FAQ(){

    const [faq1, setFaq1] = useState('answer')
    const [faq2, setFaq2] = useState('answer')
    const [faq3, setFaq3] = useState('answer')
    const [faq4, setFaq4] = useState('answer')

    const [arrow1, setArrow1] = useState('faqArrow')
    const [arrow2, setArrow2] = useState('faqArrow')
    const [arrow3, setArrow3] = useState('faqArrow')
    const [arrow4, setArrow4] = useState('faqArrow')

    const faqHandler1 = ()=>{
        if(faq1 === 'answer answer_extended'){
            setFaq1('answer')
            setArrow1('faqArrow')
        }else{
            setFaq1('answer answer_extended')
            setArrow1('faqArrow faqArrowOpened')
        }

        setFaq2('answer')
        setFaq3('answer')
        setFaq4('answer')

        setArrow2('faqArrow')
        setArrow3('faqArrow')
        setArrow4('faqArrow')
    }

    const faqHandler2 = ()=>{
        if(faq2 === 'answer answer_extended'){
            setFaq2('answer')
            setArrow2('faqArrow')
        }else{
            setFaq2('answer answer_extended')
            setArrow2('faqArrow faqArrowOpened')
        }

        setFaq1('answer')
        setFaq3('answer')
        setFaq4('answer')

        setArrow1('faqArrow')
        setArrow3('faqArrow')
        setArrow4('faqArrow')
    }

    const faqHandler3= ()=>{
        if(faq3 === 'answer answer_extended'){
            setArrow3('faqArrow')
            setFaq3('answer')
        }else{
            setFaq3('answer answer_extended')
            setArrow3('faqArrow faqArrowOpened')
        }

        setFaq1('answer')
        setFaq2('answer')
        setFaq4('answer')

        setArrow1('faqArrow')
        setArrow2('faqArrow')
        setArrow4('faqArrow')
    }

    const faqHandler4 = ()=>{
        if(faq4 === 'answer answer_extended'){
            setFaq4('answer')
            setArrow4('faqArrow')
        }else{
            setFaq4('answer answer_extended')
            setArrow4('faqArrow faqArrowOpened')
        }

        setFaq1('answer')
        setFaq2('answer')
        setFaq3('answer')

        setArrow2('faqArrow')
        setArrow3('faqArrow')
        setArrow1('faqArrow')
    }

    return(
        <>
            <div className="faq">
                <div className="faq_cover" />
                <p className="faq_title">ხშირად დასმული კითხვები</p>

                <div className="faq_questions">

                    {/* კითხვები */}

                    {/* პირველი კითხვა */}
                    <div className="question_title">

                        <div className="question" onClick={faqHandler1}>
                            <img src={dropDownArrow} alt="faq arrow" className={arrow1} />
                            <p>რა არის MYVIDEO TVBOX?</p>
                        </div>

                        <div className={faq1}>
                            <p>ეს არის საკაბელო და სატელიტური ტელევიზიის თანამედროვე ალტერნარივა. ჩვენი მოწყობილობა უერთდება თქვენს ტელებიზორს საიდანაც იღებთ შემდეგ მომსახურებას:</p>

                            <div className="features1">
                                <p className="features1_item">უყუროთ 170-ზე მეტ სატელევიზიო არხს გადახვევა-დაპაუზების ფუნქციით და მაღალი ხარისხით</p>
                                <p className="features1_item">YouTube აპლიკაციას თქვენს ტელევიზორში</p>
                            </div>
                        </div>
                    </div>

                    {/* მეორე კითხვა */}
                    <div className="question_title">

                        <div className="question" onClick={faqHandler2}>
                            <img src={dropDownArrow} alt="faq arrow" className={arrow2} />
                            <p>სად შეიძება მისი დაყენება?</p>
                        </div>

                        <div className={faq2} >
                            <p>მოწყობილობა მუშაობს ინტერნეტის საშუალებით. სერვისით სარგებლობა შესაძლებელია როგორც საქართველოში, ასევე საზღვარგარეთ. ყველგან სადაც ინტერნეტია.</p>

                        </div>
                    </div>

                    {/* მესამე კითხვა */}
                    <div className="question_title">

                        <div className="question" onClick={faqHandler3}>
                            <img src={dropDownArrow} alt="faq arrow" className={arrow3} />
                            <p>რა ღირს დაყენება და რამდენია სააბონენტო?</p>
                        </div>

                        <div className={faq3} >
                            <p className="faq3_titles noMarginTop">მოწყობილობა შეგიძლიათ შეიძინოთ:</p>
                            <p className="features1_item faq3feature">შეძენის ფასია 159 ლარი.</p>
                            <p className="features1_item faq3feature">ფასში შედის ადგილზე მიტანა და მონრაჟი (თბილისის მაშტაბით)</p>
                            <p className="faq3_titles">უფასოდ მოგეწოდებათ საბაზო პაკეტი:</p>
                            <p className="features1_item faq3feature">102 ქართული არხი (გადახვევა დაპაუზება)</p>
                            <p className="features1_item faq3feature">YouTube აპლიკაცია</p>
                            <p className="faq3_titles">ძირითადი პაკეტები:</p>
                            <p className="features1_item faq3feature">ქართული არხები (107 არხი) - 3 ლარი</p>
                            <p className="features1_item faq3feature">ულტრა პაკეტი (194 არხი) - 20 ლარი</p>
                            <p className="features1_item faq3feature">საზღვარგარეთის პაკეტი (100 არხი) - 20 ლარი</p>

                            <p className="faq3_titles">დამატებითი პაკეტები:</p>
                            <p className="features1_item faq3feature">Silk პაკეტი (7 არხი) - 5 ლარი</p>

                        </div>
                    </div>

                    {/* მეოთხე კითხვა */}
                    <div className="question_title">
                        <div className="question" onClick={faqHandler4}>
                            <img src={dropDownArrow} alt="faq arrow" className={arrow4} />
                            <p className="question5title">როგორ ტელევიზორებზეა შესაძლებელი MYVIDEO TV BOX -ის გამოყენება?</p>
                        </div>

                        <div className={faq4} >
                            <p>MYVIDEO TV BOX ის გამოყენება შესაძლებელია როგორც ანალოგურ, ასევე ციფრულ ტელევიზორებზე. ციფრულ ტელევიზორზე მიერთება ხდება HDMI კაბელით, ხოლო ანალოგურზე - Audio Video კაბელით.</p>

                        </div>
                    </div>

                </div>

                <FooterBanner />
            </div>
            
        </>
    )
}