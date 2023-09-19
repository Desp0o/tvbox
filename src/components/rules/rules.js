import { useContext } from "react"
import { ModalContext } from "../modalContext"

import closeX from "../images/closeX.webp"

import "./rules.css"


export default function Rules(){

    const rulesHandler = () => {
        document.body.style.overflow='auto'
        setRulesBackGround('rulesOutter')
    }


    const {rulesBackGround, setRulesBackGround} = useContext(ModalContext)


    return(
        <>
            <div className={rulesBackGround} onClick={rulesHandler}>

            <img className="rulesCloseX" src={closeX} alt="rules close button" onClick={rulesHandler} loading="lazy"/>
            
            <div className="rulesPopUp">
                <p className="rules_title">მომსახურების პირობები</p>

                <div className="rules_texts1">
                    <p className="rules_small_title">1. გარანტია</p>
                    <p className="rules_normal_text">MYVIDEO TV BOX-ის შეძენიდან 1 (ერთი) კალენდარული წლის განმავლობაში გარანტია ვრცელდება შემდეგ მოწყობილობებზე:</p>
                
                    <p className="rules_red_text">IR დისტანციური მართვის პულტი;</p>
                    <p className="rules_red_text">MYVIDEO TV BOX-ი.</p>

                    <p className="rules_normal_text">გარანტია არ ვრცელდება შემდეგ მოწყობილობებზე:</p>

                    <p className="rules_red_text">კვების ბლოკი;</p>
                    <p className="rules_red_text">HDMI კაბელი;</p>
                    <p className="rules_red_text">AV აუდიო/ვიდეო კაბელი.</p>

                    <p className="rules_small_title_black">დამატებითი პირობები</p>

                    <p className="rules_normal_text">საგარანტიო მომსახურების მისაღებად სავალდებულოა:</p>
                    <p className="rules_red_text">დაცულ იქნეს ნივთის ექსპლუატაციის ზოგადი წესები;</p>
                    <p className="rules_red_text">მყიდველმა წარმოადგინოს შევსებული და სათანადოდ დამოწმებული საგარანტიო ფურცელი.</p>
                
                    <p className="rules_normal_text">გარანტია არ მოქმედებს იმ შემთხვევაში, თუ:</p>
                    <p className="rules_red_text">საგარანტიო ფურცელი გადაკეთებულია, არ იკითხება სერიული ნომერი, გაყიდვის თარიღი;</p>
                    <p className="rules_red_text">ნივთს აღენიშნება ვიზუალური დეფექტი ან/და მექანიკური დაზიანება;</p>
                    <p className="rules_red_text">დაზიანება გამოწვეულია ელ. ქსელის გაუმართაობით (ძაბვის ცვლილებით), ნივთის დანესტიანებით, წყლით დაზიანებით.</p>
                
                
                    {/* წესი 2 */}
                    <p className="rules_small_title">2. დაბრუნება</p>
                    <p className="rules_normal_text2">MYVIDEO TV BOX-ის შეძენიდან 7 (შვიდი) კალენდარული დღის განმავლობაში მომხმარებელს უფლება აქვს დააბრუნოს ნივთი იმ პირობით, რომ ის იქნება უნაკლო მდგომარეობაში, რა დროსაც მოხდება მის მიერ გადახდილი თანხის (მხოლოდ MYVIDEO TV BOX-ის ღირებულების) სრულად ანაზღაურება, შესაბამისი გადახდის საბუთის წარდგენის საფუძველზე (მაგ.: ჩ.გ.დ.).</p>
                
                
                    {/* წესი 3 */}
                    <p className="rules_small_title">3. Myvideo TV Box-ის სარგებლობის აუცილებელი პირობები</p>
                    <p className="rules_normal_text2">Myvideo TV Box-ის მუშაობისათვის საჭიროა :</p>
                    <p className="rules_red_text">ნებისმიერი ტიპის ტელევიზორი;</p>
                    <p className="rules_red_text">ინტერნეტი (ნებისმიერი ინტერნეტ-პროვაიდერის მიერ მოწოდებული 3მბ/წმ სტაბილური სიჩქარით);</p>
                    <p className="rules_red_text">ელ. ენერგიის წყარო.</p>
                    <p className="rules_normal_text2">Myvideo TV Box-ი მუშაობს როგორც wifi მოდემის, ასევე ქსელის კაბელის მიერთებით. მოწყობილობის გამართულობა და სატელევიზიო სიგნალის უწყვეტობა დამოკიდებულია მომხმარებლის ინტერნეტის სტაბილურობაზე.</p>


                    {/* წესი 4 */}
                    <p className="rules_small_title">4. Myvideo TV Box-ის შეძენა</p>
                    <p className="rules_normal_text2">Myvideo TV Box-ის შეძენა შესაძლებელია :</p>
                    <p className="rules_red_text">tvbox.ge-ს საიტზე შეკვეთის ფორმის შევსებით;</p>
                    <p className="rules_red_text">2490049 ზე ზარის განხორციელებით;</p>

                    {/* წესი 5 */}
                    <p className="rules_small_title">5. ინსტალაცია</p>
                    <p className="rules_normal_text2">Myvideo TV Box-ის ინსტალაციისათვის საჭიროა შემდეგი მოქმედებების შესრულება:</p>
                    <p className="rules_normal_text2">შეაერთეთ Myvideo TV Box-ი</p>
                    <p className="rules_red_text">ელექტო ენერგიის წყაროსთან (5V შესაერთებელში);</p>
                    <p className="rules_red_text">აუდიო/ვიდეო ან HDMI კაბელით ტელევიზორთან (A/V ან HDMI შესაერთებელში);</p>
                    <p className="rules_red_text">ინტერნეტთან (ქსელის კაბელის შემთხვევაში ETHERNET შესაერთებელში)</p>
                    <p className="rules_normal_text2">ამ სამი ნაბიჯის შემდეგ თქვენ უკვე შეძლებთ Myvideo TV Box-ის ჩართვას.</p>

                    {/* წესი 6 */}
                    <p className="rules_small_title">5. WIFI მოდემით დაკავშირება</p>
                    <p className="rules_normal_text2">იმ შემთხვევაში თუ გსურთ Myvideo TV Box-ის ინტერნეტთან WIFI-ის მოდემით დაკავშირება, საჭიროა შემდეგი მოქმედებების შესრულება:</p>
                    <p className="rules_red_text">Myvideo TV Box-იდან გაიარეთ ავტორიზაცია (მოცემულ ველებში შეიყვანეთ ელ. ფოსტა და პაროლი, რომლითაც დარეგისტრირებული ხართ Myvideo.ge-ზე);</p>
                    <p className="rules_red_text">სანავიგაციო მენიუში მოძებნეთ “პარამეტრები”-ს პუნქტი;</p>
                    <p className="rules_red_text">ჩართეთ WIFI-ს ფუნქცია;</p>
                    <p className="rules_red_text">მოძებნეთ მარჯვენა სვეტში წარმოდგენილი თქვენი WIFI მოდემის სახელი და დაუკავშირდით მას.</p>

                </div>
            </div>

            </div>
        </>
    )
}