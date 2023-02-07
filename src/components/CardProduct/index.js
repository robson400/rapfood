
export default function CardProduct(props) {
    
    return (
        <>
            <img src={props.img} alt="" />
            <h5>{props.title}</h5>
            <p>
                {props.children}
            </p>
            <p>
                R$ <strong>{props.price}</strong>
            </p>
        </>
    );
}