import './orderInputs.css'

export default function PriceTableComponent(props){
    return(
        <>
            <div className="priceTableBlock">
                <p className="priceTableBlock_price">{props.price} <span>₾</span></p>
                <p className={props.classColor}>{props.title}</p>
            </div>
        </>
    )
}