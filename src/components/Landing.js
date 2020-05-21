import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ValidationError from './ValidationError'
import RecipeContext from './RecipeContext'


export default class Landing extends Component {

    constructor(props){
        super(props)
        this.state = {
            username :{ value:'', touched:false}
        }
    }

    static contextType = RecipeContext 

    handleSubmit = (event) =>{

        event.preventDefault();

        this.props.history.push('/list')


        const username = event.target.username.value;
        const password = event.target.password.value;

        /* validate */

        

       
        fetch('http://localhost:8000/api/auth/login',{
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

    updateName(name){
        this.setState({
            username:{value:name,touched:true}
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
                        placeholder="Username"
                        name="username" 
                        className="textIn"
                        onChange={ e => this.updateName(e.target.value)}  />
                    <br />
                    <input type="text" placeholder="Password" name="password" className="textIn" />
                    <br /> 
                    <button 
                        type="submit" 
                        className="sign-in-bttn"
                        disabled={this.validateName()}>Sign In</button>
                    <div className="create-account">
                        <Link to="/createUser" type="button" className="new-user-bttn">Sign Up</Link>
                    </div>
                </form>
                </div>
            </section>
            </>
        )
    }
}
