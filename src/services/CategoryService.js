import { ApiService } from "./ApiService";

const endpoint = 'categoria';

export const CategoryService = {
    list(){
        return ApiService.get(endpoint);
    },

    create(newCategory){
        return ApiService.post(endpoint, newCategory);
    }, 

    delete(categoryId){
        return ApiService.delete(endpoint, categoryId);
    }
}