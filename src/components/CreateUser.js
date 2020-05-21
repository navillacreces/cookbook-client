import React, { Component } from 'react'

export default class CreateUser extends Component {

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
        return (<>
            <section>
            <h1>Full Stack Cookbook</h1>
        </section>
            <section className="landing-section">
                <div className="form">
                <form className="landing-form" onSubmit={this.handleSubmit}>
                    <input type="text" defaultValue="Username" name="username" className="textIn" />
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
