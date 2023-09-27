import { useState, useEffect, useContext, useRef, useMemo } from "react"
import { ModalContext } from "../modalContext"
import "./orderInputs.css"
import PriceTableComponent from "./priceTableBlock"
import plusIcon from '../images/plus.webp'
import Rules from "../rules/rules"

export default function OrderInputs() {

    const emailRegex = useMemo(() => {
        return new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
      }, [])

      const regex = useMemo(() => {
        return new RegExp(/[0-9!@#$%^&*()_+{}[\]:;<>,./?~]/);
      }, [])

      const numberRegex = useMemo(() => {
        return new RegExp(/^\s*[0-9]+\s*$/);
      }, [])


    const nameRef     = useRef()
    const lastNameRef = useRef()
    const idNumRef    = useRef()
    const phoneRef    = useRef()
    const emailRef    = useRef()
    const adressRef   = useRef()
    const orderInputsRef = useRef()

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
        City: "",
        Country: "",
        Firstname: "",
        Lastname: "",
        IDNumber: "",
        Phone: "",
        Email: "",
        Address: ""
    })

    const [valuesBoolean, setValuesBoolean] = useState({
        fisrtName: false,
        lastName: false,
        idNumber: false,
        phoneNum: false,
        email: false,
        adress: false
    })

    const [cityClass, setCityClass] = useState('displayNone')
    const [countryClass, setCountryClass] = useState('displayNone')
    const [orderInner, setOrderInner] = useState('orderInner')
    const [inputInner, setInputInner] = useState('inputsInner')
    const [completedOrder, setCompletedOrder] = useState ('completedOrderHidden')

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
        } else if (values.location === 'სხვაგან საქართველოში' && values.package !== '' && values.City !== '') {
            setInputInner('inputsInner inputsInner_Extended')
            setFirstScreenClass('firstScreen firstScreen_FitContent')
            setSumClass('sumBlack')
        } else if (values.location === 'საზღვარგარეთ' && values.package !== '' && values.Country !== '') {
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
        // eslint-disable-next-line
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

        if(values.location === "თბილისი"){
            setValues(prevValues => ({ ...prevValues, City: 'თბილისი', Country: 'საქართველო' }));
        
        }

        if (values.location === 'საზღვარგარეთ'){
            setValues(prevValues => ({ ...prevValues, City: '' }));
        }

        if (values.location === 'სხვაგან საქართველოში'){
            setValues(prevValues => ({ ...prevValues, Country: 'საქართველო' }));
        }

    }, [values.location])

    useEffect(() => {
        if (window.innerWidth < 801) {

            if (values.location === 'თბილისი' && values.package === '') {
                setPriceTable('priceTableRes')
            }


            if (values.location === 'თბილისი' && values.package !== '') {
                setPriceTable('priceTable')

            } else if (values.location === 'სხვაგან საქართველოში' && values.package !== '' && values.City !== '') {
                setPriceTable('priceTable')

            } else if (values.location === 'საზღვარგარეთ' && values.package !== '' && values.Country !== '') {
                setPriceTable('priceTable')

            } else {


            }

            if (values.location === '') {
                setPriceTable('priceTableRes')
            }
        }
    }, [values])

    useEffect(()=>{
    
        if(nameRef.current.value.length > 0 && !regex.test(nameRef.current.value)){
            nameRef.current.style.border = "solid 1px green"
            setValuesBoolean(prevValues=>({...prevValues, fisrtName: true}))
        }else if(nameRef.current.value.length === 0){
            nameRef.current.style.border = "unset"
        }

    },[values.Firstname, regex])

    useEffect(()=>{
    
        if(lastNameRef.current.value.length > 0 && !regex.test(lastNameRef.current.value)){
            lastNameRef.current.style.border = "solid 1px green"
            setValuesBoolean(prevValues=>({...prevValues, lastName: true}))
        }else if(lastNameRef.current.value.length === 0){
            lastNameRef.current.style.border = "unset"
        }

    },[values.Lastname, regex])

    useEffect(()=>{
        if(idNumRef.current.value.length > 0 && numberRegex.test(idNumRef.current.value)){
            if(idNumRef.current.value.length > 10){
                setValuesBoolean(prevValues=>({...prevValues, idNumber: true}))
            }
            idNumRef.current.style.border = "solid 1px green"
            
        }else if(idNumRef.current.value.length === 0){
            idNumRef.current.style.border = "unset"
        }
    },[values.IDNumber, numberRegex])

    useEffect(()=>{
        if(phoneRef.current.value.length > 0 && numberRegex.test(phoneRef.current.value)){
            if(phoneRef.current.value.length > 8){
                setValuesBoolean(prevValues=>({...prevValues, phoneNum: true}))
            }
            
            phoneRef.current.style.border = "solid 1px green"
            
        }else if(phoneRef.current.value.length === 0){
            phoneRef.current.style.border = "unset"
        }
    },[values.Phone, numberRegex])

    useEffect(()=>{
        if(emailRef.current.value.length > 0 ){
            setValuesBoolean(prevValues=>({...prevValues, email: true}))
            emailRef.current.style.border = "solid 1px green"
            
        }else if(emailRef.current.value.length === 0){
            emailRef.current.style.border = "unset"
        }
    },[values.Email])

    useEffect(()=>{
        if(adressRef.current.value.length > 5){
            setValuesBoolean(prevValues=>({...prevValues, adress: true}))
            adressRef.current.style.border = "solid 1px green"
        }else if(adressRef.current.value.length === 0){
            adressRef.current.style.border = "unset"
        }
    },[values.Address])


    const checkForms = ()=> {

        if(!nameRef.current.value.length > 0 || regex.test(nameRef.current.value)){
            nameRef.current.style.border = "solid 1px red"
            setValuesBoolean(prevValues=>({...prevValues, fisrtName: false}))
        }

        if(!lastNameRef.current.value.length > 0 || regex.test(lastNameRef.current.value)){
            lastNameRef.current.style.border = "solid 1px red"
            setValuesBoolean(prevValues=>({...prevValues, lastName: false}))
        }

        if(idNumRef.current.value.length < 11 || !numberRegex.test(idNumRef.current.value)){
            idNumRef.current.style.border = "solid 1px red"
            setValuesBoolean(prevValues=>({...prevValues, idNumber: false}))
        }

        if(phoneRef.current.value.length < 9 || !numberRegex.test(phoneRef.current.value)){
            phoneRef.current.style.border = "solid 1px red"
            setValuesBoolean(prevValues=>({...prevValues, phoneNum: false}))
        }

        if(!emailRegex.test(emailRef.current.value)){
            emailRef.current.style.border = "solid 1px red"
            setValuesBoolean(prevValues=>({...prevValues, email: false}))
        }

        if(!adressRef.current.value.length > 0){
            adressRef.current.style.border = "solid 1px red"
            setValuesBoolean(prevValues=>({...prevValues, adress: false}))
        }

        if(valuesBoolean.fisrtName === true &&
           valuesBoolean.lastName  === true &&
           valuesBoolean.idNumber  === true &&
           valuesBoolean.phoneNum  === true &&
           valuesBoolean.email     === true &&
           valuesBoolean.adress    === true &&
           isChecked === true) {

            if(isChecked === false){
                alert('გთხოვთ გაეცნოთ პირობებს და დაეთანხმოთ')
            }

            
            setOrderInner('displayNone')
            setCompletedOrder('completedOrderHidden completedOrderActive')
            orderInputsRef.current.scrollIntoView({behavior: 'smooth'});

            setValuesBoolean(prevValues=>({...prevValues, fisrtName: false}))
            setValuesBoolean(prevValues=>({...prevValues, lastName: false}))
            setValuesBoolean(prevValues=>({...prevValues, idNumber: false}))
            setValuesBoolean(prevValues=>({...prevValues, phoneNum: false}))
            setValuesBoolean(prevValues=>({...prevValues, email: false}))
            setValuesBoolean(prevValues=>({...prevValues, adress: false}))

            setValues(prevValues=>({...prevValues, Firstname: ""}))
            setValues(prevValues=>({...prevValues, Lastname: ""}))
            setValues(prevValues=>({...prevValues, IDNumber: ""}))
            setValues(prevValues=>({...prevValues, Phone: ""}))
            setValues(prevValues=>({...prevValues, Email: ""}))
            setValues(prevValues=>({...prevValues, Address: ""}))
            setValues(prevValues=>({...prevValues, City: ""}))
            setValues(prevValues=>({...prevValues, location: ""}))
            setValues(prevValues=>({...prevValues, package: ""}))
            setIsChecked(false)

            
        }

        if( valuesBoolean.fisrtName === true &&
            valuesBoolean.lastName  === true &&
            valuesBoolean.idNumber  === true &&
            valuesBoolean.phoneNum  === true &&
            valuesBoolean.email     === true &&
            valuesBoolean.adress    === true) {
 
             if(isChecked === false){
                 alert('გთხოვთ გაეცნოთ პირობებს და დაეთანხმოთ')
             }
         }

        
    }

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>  
            <Rules />
            <div className="orderInputs" ref={orderInputsRef}>
                <div className={orderInner}>

                    <div className={inputInner}>

                        <div className="firstForm">
                            <label htmlFor="location"/>
                            <select value={values.location} name="location" id="location" onInput={handleValues} className="inputMainStyle">

                                <option value="" disabled hidden>სად გსურთ გამოყენება</option>
                                <option>თბილისი</option>
                                <option>სხვაგან საქართველოში</option>
                                <option>საზღვარგარეთ</option>
                            </select>

                            <label htmlFor="Package"/>
                            <select value={values.package} name="package" id="Package" onChange={handleValues} className="inputMainStyle">
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


                            <select value={values.City} name="City" onInput={handleValues} className={cityClass}>
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

                            <select value={values.Country} name="Country" onChange={handleValues} className={countryClass}>
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
                            <img src={plusIcon} alt="sum plus icon" className="sumPlus" loading="lazy"/>
                            <PriceTableComponent classColor={sumClass} price={boxPrice} title="ღირებულება" />
                            <img src={plusIcon} alt="sum plus icon" className="sumPlus" />
                            <PriceTableComponent classColor={sumClass} price={montlyPrice} title="თვეში" loading="lazy"/>
                        </div>

                        <div className="secondForm">
                            <div className="secondForm_upper">
                                <input ref={nameRef} type="text" name="Firstname" value={values.Firstname} placeholder="სახელი *" className="inputMainStyle" onChange={handleValues} />
                                <input ref={lastNameRef} type="text" name="Lastname" value={values.Lastname} placeholder="გვარი *" className="inputMainStyle" onChange={handleValues} />
                                <input ref={idNumRef} type="text" name="IDNumber" value={values.IDNumber} placeholder="პირადი ნომერი *" className="inputMainStyle no-arrows" onChange={handleValues} />
                            </div>

                            <div className="secondForm_below">
                                <input ref={phoneRef} type="text" name="Phone" value={values.Phone} placeholder="ტელეფონი *" className="inputMainStyle phone_email no-arrows" onChange={handleValues} />
                                <input ref={emailRef} type="email" name="Email" value={values.Email} placeholder="ელ. ფოსტა *" className="inputMainStyle phone_email" onChange={handleValues} />
                                <input ref={adressRef} type="text" name="Address" value={values.Address} placeholder="მისამართ *" className="inputMainStyle adress" onChange={handleValues} />

                            </div>
                        </div>

                        <div className="rulesAndBtn">
                            <label htmlFor="checkbox"/> 
                            <input type="checkbox" id="checkbox" className="checkBox" checked={isChecked} onChange={handleCheckboxChange}/>
                            <p className="rules">გავეცანი და ვეთანხმები <span onClick={rulesHandler}>პირობებს</span></p>
                        </div>

                        <div className="btn">
                            <div className="agreeBtn" onClick={checkForms}>
                                <p>შეკვეთის გაფორმება</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className={completedOrder}>
                    <p className="orderP1">თქვენი შეკვეთა წარმატებით განხორციელდა</p>
                    <p className="orderP2">ჩვენი წარმომადგენელი დაგიკავშირდებათ უახლოეს სამუშაო საათებში</p>
                </div>
            </div>
        </>
    )
}
