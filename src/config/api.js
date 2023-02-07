import axios from 'axios';
// axios.get('toda_url');
const api = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        "Authorization": "TOKEN_37HDJAHDHOHDSA" + localStorage.getItem('token')
    }
});

export default api;
// http://localhost:4000/products

// api.get('products');
// api.get('products/id');
// api.post('products', objeto_de_dados);
// api.put('products/id', objeto_de_dados);
// api.delete('products/id');