import { useEffect } from 'react';
import axios from 'axios';
import api from '../../config/api';
function ExemploAxios() {

    async function getCep() {
        const response = await axios.get('https://viacep.com.br/ws/60763600/json/');
        console.log(response.data);
    }

    useEffect(() => {
        // axios.get('https://viacep.com.br/ws/60763600/json/')
        // .then((response) => {
        //     console.log(response.data);
        // })
        // .catch((error) => {
        //     console.log(error);
        // });

        // const request = axios.get('https://viacep.com.br/ws/60763600/json/');
        // request.then(() => {}).catch(() => {});
        
        // axios.get();
        // axios.post();
        // axios.put();
        // axios.delete();
        getCep();
    }, []);

    return (
        <>
            <h1>Axios</h1>
        </>
    )
}

export default ExemploAxios;