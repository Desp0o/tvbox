export default function PriceTableComponent(props){
    return(
        <>
            <div className="priceTableBlock">
                <p className="priceTableBlock_price">{props.price}</p>
                <p>{props.title}</p>
            </div>
        </>
    )
}