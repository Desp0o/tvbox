import './parameters.css'

import sizes from "../../../components/images/zomebi.webp"

const sysArr = [
    'CPU Armeabi-v7a', 'GPU Quad Core Mali-450MP', 'DDR3 1GB', 'NAND Flash 8G', 'OS Android 7.1.2', 'Wi-Fi IEEE 802.11 b/g/n'
]

export default function Parameters(){
    return(
        <>
            <div className='parameters'>

                <div className='parameters_inner'>
                    <p className="device_title">პარამეტრები</p>

                    <div className='system'>
                        <div className='system_left'>
                            <p className='sys_title'>მოწყობილობის ტექნიკური პარამეტრები</p>

                            { sysArr.map((item, index) => {
                                return(
                                    
                                        <p key={index} className='system_preference'>{item}</p>
                                    
                                )
                            })}
                        </div>

                        <img src={sizes} alt='device sizes' className='deviceSize'/>
                    </div>

                </div>
            </div>
        </>
    )
}