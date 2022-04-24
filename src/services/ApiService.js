const api = 'http://localhost:3002/api/lista-cursos/';

export const ApiService = {
    get(endpoint){
        return fetch(`${api}${endpoint}`).then(response => response.json());
    },

    post(endpoint, data){
        const response = fetch(`${api}${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        return response.json();
    }, 
    
    delete(endpoint, id){
        const response = fetch(`${api}${endpoint}?id=${id}`, {
            method: 'DELETE'
        });
        return response.json();
    }
};