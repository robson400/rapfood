import CardProduct from "../CardProduct";

function ListCardProduct() {
    return (
        <>
            <h1>Lista de Produtos</h1>
            <CardProduct title="Pizza de Frango" img="" price="29,99">
                Frango, Queijo, Tomate e Cebola
            </CardProduct>
            <CardProduct title="Pizza de Calabresa" img="" price="31,66">
                <span>
                    Calabresa, Queijo, Tomate e Cebola
                </span>
            </CardProduct>
            <CardProduct title="Pizza de Bacon" img="" price="25,99">
                Frango, Bacon, Queijo, Tomate e Cebola
            </CardProduct>

            <CardProduct title="Pizza Portuguesa" img="">
                Ovo, Calabresa, Pimentão, Cebola e Tomate
            </CardProduct>
        </>
    );
}

export default ListCardProduct;