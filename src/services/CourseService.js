import { ApiService } from "./ApiService";

const endpoint = 'cursos';

export const CourseService = {
    list(){
        return ApiService.get(endpoint);
    },

    create(newCourse){
        return ApiService.post(endpoint, newCourse);
    }, 

    delete(courseId){
        return ApiService.delete(endpoint, courseId);
    }
}