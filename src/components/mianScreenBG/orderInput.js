import { useState, useEffect, useContext } from "react"
import { ModalContext } from "../modalContext"
import "./orderInputs.css"
import PriceTableComponent from "./priceTableBlock"
import plusIcon from '../images/plus.webp'
import Rules from "../rules/rules"

export default function OrderInputs() {

    const { setRulesBackGround} = useContext(ModalContext)

    const cityArray = [
        'ქუთაისი', 'ბათუმი', 'ახალციხე', 'გორი', 'ამბროლაური', 'თელავი', 'ზუგდიდი', 'ფოთი',
        'რუსთავი', 'ოზურგეთი', 'მცხეთა', 'აბაშა',
        'თბილისის შემოგარენი', 'ადიგენი', 'ასპინძა', 'ახალგორი', 'ახალქალაქი', 'ახმეტა', 'ბაღდათი', 'ბოლნისი',
        'ბორჯომი', 'გარდაბანი', 'გორი', 'გაგრა', 'გალი', 'გუდაუთა', 'გულრიფში', 'გურჯაანი', 'დედოფლისწყარო', 'დმანისი', 'დუშეთი',
        'ვანი', 'ზესტაფონი', 'თეთრიწყარო', 'თელავი', 'თერჯოლა', 'თიანეთი', 'თიღვი', 'კასპი', 'ლანჩხუთი', 'ლაგოდეხი', 'ლენტეხი', 'მარნეული', 'მარტვილი', 'მესტია', 'ნინოწმინდა', 'ონი', 'ოჩამჩირე',
        'საგარეჯო', 'სამტრედია', 'საჩხერე', 'სენაკი', 'სიღნაღი', 'სოხუმი', 'სტეფანწმინდა', 'ტყიბული', 'ტყვარჩელი', 'ქარელი', 'ქედა',
        'ქობულეთი', 'ყვარელი', 'ჩოხატაური', 'ჩხოროწყუ', 'შუახევი', 'ცაგერი', 'ცხინვალი', 'წალენჯიხა', 'წალკა', 'წყალტუბო', 'ჭიათურა',
        'ხარაგაული', 'ხაშური', 'ხობი', 'ხონი', 'ხულო', 'ხელვაჩაური', 'ჯავა'
    ]
    cityArray.sort()

    const countryArray = [
        "ალბანეთი", "ანდორა", "სომხეთი", "ავსტრია", "აზერბაიჯანი", "ბელარუსი", "ბელგია", "ბოსნია ჰერცოგოვინა", "ბულგარეთი", "ხორვატია", "კვიპროსი", "ჩეხეთი",
        "დანია", "ესტონეთი", "ფინეთი", "საფრანგეთი", "გერმანია", "საბერძნეთი", "უნგრეთი", "ისლანდია", "ირლანდია", "იტალია", "ლატვია", "ლიხტენშტეინი", "ლუქსემბურგი",
        "მაკედონია", "მალტა", "მოლდავეთი", "მონაკო", "ნიდერლანდები", "ნორვეგია", "პოლონეთი", "პორტუგალია", "რუმინეთი", "რუსეთი", "სან მარინო", "სერბეთი", "სლოვაკეთი",
        "ესპანეთი", "შვედეთი", "შვეიცარია", "თურქეთი", "უკრაინა", "ინგლისი", "ვატიკანი", "ამერიკა", "კანადა", "ისრაელი"
    ]
    countryArray.sort()

    const [values, setValues] = useState({
        location: "",
        package: "",
        city: "",
        country: ""
    })
    const [cityClass, setCityClass] = useState('displayNone')
    const [countryClass, setCountryClass] = useState('displayNone')
    const [inputInner, setInputInner] = useState('inputsInner')

    const [deliveryPrice, setDeliveryPrice] = useState('--')
    const [boxPrice, setBoxPrice] = useState('--')
    const [montlyPrice, setMonthlyPrice] = useState('--')
    const [sumClass, setSumClass] = useState('sumWhite')

    const [priceTable, setPriceTable] = useState('priceTable')

    const { setFirstScreenClass } = useContext(ModalContext)

    const handleValues = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const rulesHandler = ()=>{
        document.body.style.overflow='hidden'
        setRulesBackGround('rulesOutter rulesOutter_active')
    }

    useEffect(() => {
        if (values.location === 'თბილისი' && values.package !== '') {
            setInputInner('inputsInner inputsInner_Extended')
            setFirstScreenClass('firstScreen firstScreen_FitContent')
            setSumClass('sumBlack')
        } else if (values.location === 'სხვაგან საქართველოში' && values.package !== '' && values.city !== '') {
            setInputInner('inputsInner inputsInner_Extended')
            setFirstScreenClass('firstScreen firstScreen_FitContent')
            setSumClass('sumBlack')
        } else if (values.location === 'საზღვარგარეთ' && values.package !== '' && values.country !== '') {
            setInputInner('inputsInner inputsInner_Extended')
            setFirstScreenClass('firstScreen firstScreen_FitContent')
            setSumClass('sumBlack')
        } else {
            setInputInner('inputsInner')
            setSumClass('sumWhite')
            setFirstScreenClass('firstScreen')
        }


        // *****მიტანის ფასი ******
        if (values.location === 'თბილისი') {
            setDeliveryPrice(0)
        } else if (values.location === 'სხვაგან საქართველოში') {
            setDeliveryPrice(0)
        } else if (values.location === 'საზღვარგარეთ') {
            setDeliveryPrice(50)
        } else {
            setDeliveryPrice("--")
        }

        // *****ბოქსის ფასი ******
        if (values.location !== '') {
            setBoxPrice(159)
        } else {
            setBoxPrice('--')
        }

        // *****პაკეტის ფასი ******
        if (values.package === 'საბაზისო') {
            setMonthlyPrice(0)
        } else if (values.package === 'ქართული არხები') {
            setMonthlyPrice(3)
        } else if (values.package === 'ულტრა პაკეტი') {
            setMonthlyPrice(20)
        } else if (values.package === 'ქართული არხები საზღვარგარეთ') {
            setMonthlyPrice(20)
        } else {
            setMonthlyPrice('--')
        }

    }, [values])

    useEffect(() => {

        if (values.location === 'სხვაგან საქართველოში') {
            setCityClass('inputMainStyle')
            setCountryClass('displayNone')
            setValues(prevValues => ({ ...prevValues, package: '' }));
        } else if (values.location === 'საზღვარგარეთ') {
            setCountryClass('inputMainStyle')
            setCityClass('displayNone')
            setValues(prevValues => ({ ...prevValues, package: '' }));
        } else {
            setCityClass('displayNone')
            setCountryClass('displayNone')
            setValues(prevValues => ({ ...prevValues, package: '' }));
        }



    }, [values.location])

    useEffect(() => {
        if (window.innerWidth < 801) {

            if (values.location === 'თბილისი' && values.package === '') {
                setPriceTable('priceTableRes')
            }


            if (values.location === 'თბილისი' && values.package !== '') {
                setPriceTable('priceTable')

            } else if (values.location === 'სხვაგან საქართველოში' && values.package !== '' && values.city !== '') {
                setPriceTable('priceTable')

            } else if (values.location === 'საზღვარგარეთ' && values.package !== '' && values.country !== '') {
                setPriceTable('priceTable')

            } else {


            }

            if (values.location === '') {
                setPriceTable('priceTableRes')
            }
        }
    }, [values])

    useEffect(() => {
        console.log(values);
    }, [values])

    return (
        <>  
            <Rules />
            <div className="orderInputs">
                <div className="orderInner">

                    <div className={inputInner}>

                        <div className="firstForm">
                            <select value={values.location} name="location" onInput={handleValues} className="inputMainStyle">

                                <option value="" disabled hidden>სად გსურთ გამოყენება</option>
                                <option>თბილისი</option>
                                <option>სხვაგან საქართველოში</option>
                                <option>საზღვარგარეთ</option>
                            </select>

                            <select value={values.package} name="package" onChange={handleValues} className="inputMainStyle">
                                <option value="" disabled hidden>აირჩიეთ არხების პაკეტი</option>
                                {values.location === "საზღვარგარეთ" ? (
                                    <>
                                        <option value="ქართული არხები საზღვარგარეთ">ქართული არხები საზღვარგარეთ</option>
                                    </>
                                ) : (
                                    <>
                                        <option value="საბაზისო">საბაზისო</option>
                                        <option value="ქართული არხები">ქართული არხები</option>
                                        <option value="ულტრა პაკეტი">ულტრა პაკეტი</option>
                                    </>
                                )}
                            </select>


                            <select value={values.city} name="city" onInput={handleValues} className={cityClass}>
                                <option value="" disabled hidden>აირჩიეთ ქალაქი</option>
                                {cityArray.map((city, index) => {
                                    return (
                                        <option key={index} className="optionStyle"
                                            disabled={city === "გაგრა"
                                                || city === "გალი"
                                                || city === "გუდაუთა"
                                                || city === "გულრიფში"
                                                || city === "ოჩამჩირე"
                                                || city === "სოხუმი"
                                                || city === "ცხინვალი"
                                                || city === "ჯავა"
                                            }
                                        >{city}</option>
                                    )
                                })}
                            </select>

                            <select value={values.country} name="country" onChange={handleValues} className={countryClass}>
                                <option value="" disabled hidden>აირჩიეთ ქვეყანა</option>
                                {
                                    countryArray.map((country, index) => {
                                        return (
                                            <option key={index}>{country}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <div className={priceTable}>
                            <PriceTableComponent classColor={sumClass} price={deliveryPrice} title="მიტანა" />
                            <img src={plusIcon} alt="sum plus icon" className="sumPlus" />
                            <PriceTableComponent classColor={sumClass} price={boxPrice} title="ღირებულება" />
                            <img src={plusIcon} alt="sum plus icon" className="sumPlus" />
                            <PriceTableComponent classColor={sumClass} price={montlyPrice} title="თვეში" />
                        </div>

                        <div className="secondForm">
                            <div className="secondForm_upper">
                                <input type="text" name="name" placeholder="სახელი *" className="inputMainStyle" />
                                <input type="text" name="surname" placeholder="გვარი *" className="inputMainStyle" />
                                <input type="text" name="idnumber" placeholder="პირადი ნომერი *" className="inputMainStyle no-arrows" />
                            </div>

                            <div className="secondForm_below">
                                <input type="text" name="phone_number" placeholder="ტელეფონი *" className="inputMainStyle phone_email no-arrows" />
                                <input type="email" name="email" placeholder="ელ. ფოსტა *" className="inputMainStyle phone_email" />
                                <input type="text" name="adress" placeholder="მისამართ *" className="inputMainStyle adress" />

                            </div>
                        </div>

                        <div className="rulesAndBtn">
                            <input type="checkbox" className="checkBox" />
                            <p className="rules">გავეცანი და ვეთანხმები <span onClick={rulesHandler}>პირობებს</span></p>
                        </div>

                        <div className="btn">
                            <div className="agreeBtn">
                                <p>შეკვეთის გაფორმება</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}