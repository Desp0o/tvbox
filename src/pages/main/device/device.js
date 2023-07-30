import "./device.css"

import box from "../../../components/images/box.png"
import remote from "../../../components/images/remote.png"
import hdmi from '../../../components/images/hdmi.png'
import power from '../../../components/images/power.png'

const hardwareArr = [
    {
        data: 'MYVIDEO TV BOX',
        image: `${box}`
    },

    {
        data: 'IR პულტი',
        image: `${remote}`
    },

    {
        data: 'კვების ბლოკი',
        image: `${power}`,
        class: 'device_img_block_power'
    },

    {
        data: 'HDMI კაბელი',
        image: `${hdmi}`
    },

]

export default function Device(props) {

    return(
        <>
            <div className="device">
                <div className="device_inner">
                    <div className={props.class ? props.class : 'device_first_txt'}>
                        <p className="device_title">მოწყობილობა</p>
                        <p className="device_desc">MYVIDEO TV BOX არის მოწყობილობა, რომლის მეშვეობითაც ნებისმიერ ტელევიზორში შეგიძლიათ მიიღოთ myvideo.ge-ზე არსებული სერვისები: ქართული და უცხოური სატელევიზიო არხები გადახვევა-დაპაუზების ფუნქციით, ვიდეოები, ახალი ამბები და მრავალი სხვა.</p>
                        <p className="device_desc">სერვისის გამართული მუშაობისათვის საჭიროა სტაბილური ინტერნეტს შეერთება.</p>
                        <p className="device_desc">(სიჩქარე მინიმუმ 3 მეგაბიტი წამში)</p>
                    </div>

                    <div className="device_sec_txt">
                        <div className="device_title">კომპლექტაცია</div>

                        <div className="device_images">
                            {hardwareArr.map((part, index) => {
                                return(
                                    <div className={part.class ? part.class : 'device_img_block'} data-title={part.data} key={index}>
                                        <img src={part.image} className="hardware_img" alt="hardware"/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}