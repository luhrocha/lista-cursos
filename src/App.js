import './App.css';
import Course from './components/Course';
import { Component } from 'react';
import NewCourseForm from './components/NewCourseForm';
import NewCategoryForm from './components/NewCategoryForm';
import {CourseService} from './services/CourseService';
import {CategoryService} from './services/CategoryService';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      courses: [],
      categories: []
    };

    this.listData = this.listData.bind(this);
    this.add = this.add.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.remove = this.remove.bind(this);
   

    this.listData();
  }

  async listData(){
    const [courses, categories] = await Promise.all([
      CourseService.list(),
      CategoryService.list()
    ])
    
    this.setState({courses , categories});
  } 

  async add(course){
    const {courses} = this.state,
    //newCourse = Object.assign({}, course, {id: (Date.now())});
    newCourse = await CourseService.create(course);
    courses.push(newCourse);
    this.setState({courses});     
  }

  async addCategory(category){
    const {categories} = this.state,
    //newCourse = Object.assign({}, course, {id: (Date.now())});
    newCategory = await CategoryService.create(category);
    categories.push(newCategory);
    this.setState({categories});     
  }

   async remove(courseId){
    const {courses} = this.state,
    courseIndex = courses.findIndex(course => course.id === courseId);
    
    await CourseService.delete(courseId);

    courses.splice(courseIndex, 1);
    this.setState({courses});
  }
  
  render(){
   const {state} = this;
   
   return (
      <div className="App">
        <NewCategoryForm onSubmit={this.addCategory} /><br/>
        <NewCourseForm onSubmit={this.add} categories={state.categories}/>
        <ul className='courses-list'>  
              {
                state.courses.map(course =>  (
                      <Course course={course} onRemove={this.remove}/>             
                  ))
              }          
        </ul>
      </div>
    );
 }
}

export default App;
