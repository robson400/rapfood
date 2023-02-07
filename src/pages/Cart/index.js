import { Link } from 'react-router-dom';

function Cart() {
    return (
        <>
            <h1>Carrinho de Compras</h1>
            <Link to="/">Continuar Comprando</Link> 
            <br />
            <Link to="/payment">Finalizar Pedido</Link>
        </>
    );
}

export default Cart;