import React, { Component } from "react";

class NewCategoryForm extends Component{
    static defaultProps ={
        onSubmit: () => {}
    }
    constructor(props){
        super(props);
        this.state ={
            name:''
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
        
        const newCategory = this.state;

        if(newCategory.name){
            this.props.onSubmit(newCategory);
            this.setState({
                name: ''
            })
        }
    }

    render(){
        const { state} = this;
        
        return(
            <form className="course-form" onSubmit={this.handleSubmit}>
                <label>
                    <span>Nome: </span>
                    <input onChange={this.handleChange} name="name" value={state.name} />
                </label>                
                <button type='submit'>Criar categoria</button>
            </form>
        )
    }
}

export default NewCategoryForm;