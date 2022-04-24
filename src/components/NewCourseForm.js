import React, { Component } from "react";

class NewCourseForm extends Component{
    static defaultProps ={
        onSubmit: () => {},
        categories: []
    }
    constructor(props){
        super(props);
        this.state ={
            name:'',
            category:'',
            image:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {target} = event,
        {name, value} = target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        
        const newCourse = this.state;

        if(newCourse.name && newCourse.category && newCourse.image){
            this.props.onSubmit(newCourse);
            this.setState({
                name: '',
                category:''
            })
        }
    }

    render(){
        const { state, props} = this;
        
        return(
            <form className="course-form" onSubmit={this.handleSubmit}>
                <label>
                    <span>Nome: </span>
                    <input onChange={this.handleChange} name="name" value={state.name} />
                </label>
                <label>
                    <span>Categoria: </span>
                    <select name="category" value={state.category} onChange={this.handleChange}>
                        <option value=''>Selecionar</option>
                        {
                            props.categories.map(category => <option value={category.name}>{category.name}</option> )
                        }                     
                        
                    </select>
                </label>
                <label>
                    <span>Imagem: </span>
                    <input onChange={this.handleChange} name="image" value={state.image} />
                </label>
                <button type='submit'>Enviar curso</button>
            </form>
        )
    }
}

export default NewCourseForm;