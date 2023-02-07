import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {

    const[nome, setNome] = useState('Jose');
    const[sobrenome, setSobrenome] = useState('Gomes');
    function alterarNome() {
        setNome("Maria");
    }
    
    useEffect(() => {
       
    }, []);

    useEffect(() => {
       
    }, [nome, sobrenome]);

    return (
        <>
            {nome}
            <h1>Home</h1>
            <Link to="/cart">Concluir</Link>
            <button onClick={alterarNome}>Mudar Nome</button>
        </>
    );
}

export default Home;