import { useState, useEffect, useRef } from "react"
import "./orderInputs.css"

export default function OrderInputs(){

    const cityArray = ['ქუთაისი', 'ბათუმი', 'ახალციხე', 'გორი', 'ამბროლაური', 'თელავი', 'ზუგდიდი', 'ფოთი', 'რუსთავი', 'ოზურგეთი', 'მცხეთა', 'აბაშა',
    'თბილისის შემოგარენი', 'ადიგენი', 'ასპინძა', 'ახალგორი', 'ახალქალაქი', 'ახმეტა', 'ბაღდათი', 'ბოლნისი',
    'ბორჯომი', 'გარდაბანი', 'გორი', 'გაგრა', 'გალი', 'გუდაუთა', 'გულრიფში', 'გურჯაანი', 'დედოფლისწყარო', 'დმანისი', 'დუშეთი',
    'ვანი', 'ზესტაფონი', 'თეთრიწყარო', 'თელავი', 'თერჯოლა', 'თიანეთი', 'თიღვი', 'კასპი', 'ლანჩხუთი', 'ლაგოდეხი', 'ლენტეხი', 'მარნეული', 'მარტვილი', 'მესტია', 'ნინოწმინდა', 'ონი', 'ოჩამჩირე', 
    'საგარეჯო', 'სამტრედია', 'საჩხერე', 'სენაკი', 'სიღნაღი', 'სოხუმი', 'სტეფანწმინდა', 'ტყიბული', 'ტყვარჩელი', 'ქარელი', 'ქედა', 
    'ქობულეთი', 'ყვარელი', 'ჩოხატაური', 'ჩხოროწყუ', 'შუახევი', 'ცაგერი', 'ცხინვალი', 'წალენჯიხა', 'წალკა', 'წყალტუბო', 'ჭიათურა', 
    'ხარაგაული', 'ხაშური', 'ხობი', 'ხონი', 'ხულო', 'ხელვაჩაური', 'ჯავა']

    const countryArray = [
        "ალბანეთი", "ანდორა", "სომხეთი", "ავსტრია", "აზერბაიჯანი", "ბელარუსი", "ბელგია", "ბოსნია ჰერცოგოვინა", "ბულგარეთი", "ხორვატია", "კვიპროსი", "ჩეხეთი", 
        "დანია", "ესტონეთი", "ფინეთი", "საფრანგეთი", "გერმანია", "საბერძნეთი", "უნგრეთი", "ისლანდია", "ირლანდია", "იტალია", "ლატვია", "ლიხტენშტეინი", "ლუქსემბურგი",
        "მაკედონია", "მალტა", "მოლდავეთი", "მონაკო", "ნიდერლანდები", "ნორვეგია", "პოლონეთი", "პორტუგალია", "რუმინეთი", "რუსეთი", "სან მარინო", "სერბეთი", "სლოვაკეთი", 
        "ესპანეთი", "შვედეთი", "შვეიცარია", "თურქეთი", "უკრაინა", "ინგლისი", "ვატიკანი", "ამერიკა", "კანადა", "ისრაელი"
    ]

    const [values, setValues] = useState({
        location: "",
        package: "",
        city: "",
        country: ""
    })
    const [cityClass, setCityClass] = useState('displayNone')
    const [countryClass, setCountryClass] = useState('displayNone')

    
    const handleValues = (e)=> {
        setValues({...values, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        
    },[])

    useEffect(()=>{

        if(values.location === 'სხვაგან საქართველოში'){
            setCityClass('inputMainStyle')
            setCountryClass('displayNone')
        }else if(values.location === 'საზღვარგარეთ'){
            setCountryClass('inputMainStyle')
            setCityClass('displayNone')
        }else{
            setCityClass('displayNone')
            setCountryClass('displayNone')
        }

    },[values.location])

    

    useEffect(()=>{
        console.log(values);
    },[values])

    return(
        <>
            <div className="orderInputs">
                <div className="orderInner">

                    <div className="inputs">
                        <select value={values.location} name="location" onChange={handleValues} className="inputMainStyle">
                            <option value="" disabled hidden>სად გსურთ გამოყენება</option>
                            <option>თბილისი</option>
                            <option>სხვაგან საქართველოში</option>
                            <option>საზღვარგარეთ</option>
                        </select>

                        <select value={values.package} name="package" onChange={handleValues} className="inputMainStyle">
                            <option value="" disabled hidden>აირჩიეთ არხების პაკეტი</option>
                            <option hidden={values.location === "საზღვარგარეთ" ? true : false}>საბაზისო</option>
                            <option hidden={values.location === "საზღვარგარეთ" ? true : false}>ქართული არხები</option>
                            <option hidden={values.location === "საზღვარგარეთ" ? true : false}>ულტრა პაკეტი</option>
                            <option hidden={values.location === "საზღვარგარეთ" ? false : true}>ქართული არხები საზღვარგარეთ</option>
                        </select>

                        <select  value={values.city} name="city" onChange={handleValues} className={cityClass}>
                            <option value="" disabled hidden>აირჩიეთ ქალაქი</option>
                            {cityArray.map((city, index) => {
                                return(
                                    <option key={index} className="optionStyle"
                                            disabled={   city === "გაგრა" 
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

                        <select  name="country" value={values.country} onChange={handleValues} className={countryClass}>
                            <option value="" disabled hidden>აირჩიეთ ქვეყანა</option>
                            {
                                countryArray.map((country, index) => {
                                    return(
                                        <option key={index}>{country}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                </div>
            </div>
        </>
    )
}