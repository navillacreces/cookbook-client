import React, { Component } from 'react'
import ValidationError from './ValidationError'



export default class CreateUser extends Component {


    constructor(props){
        super(props)
        this.state = {
            username: { value: '', touched: false}
        }
    }

    updateName(name){
        this.setState({
            username: {value:name, touched: true}
        })
    }

    validateName(){


        const name = this.state.username.value.trim();

        if(name.length === 0){
            return 'name is required'
        } else if (name.length < 3){
            return 'name must be longer than 3 characters'
        }
    }


    handleSubmit = (event) =>{


        this.props.history.push('/list')


        const username = event.target.username.value;
        const password = event.target.password.value;

        /* validate */
       
        fetch('http://localhost:8000/api/user',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username,password
            })

        })
        .then(res => res.json()) /*checks */
        .then(user => {
            /*  
            this.context.addUser
            this.props.history.push('/list')

            */
        })

    }
    render() {

        const nameError = this.validateName();


        return (<>
            <section>
            <h1>Full Stack Cookbook</h1>
        </section>
            <section className="landing-section">
                <div className="form">
                <form className="landing-form" onSubmit={this.handleSubmit}>
                {this.state.username.touched && <ValidationError className="land-error" message={nameError} />}
                    <input 
                        type="text" 
                        placeholder="username"
                        name="username"
                        onChange={ e => this.updateName(e.target.value)} 
                        className="textIn" />
                    <br />
                    <input type="text" defaultValue="Password" name="password" className="textIn" />
                    <br /> 
                    <button type="submit" className="create-bttn">Create Account</button>
                </form>
                </div>
            </section>
            </>
        )
    }
}
