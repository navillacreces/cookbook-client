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
        return (
            <section className="create-user-section">
            <form className="new-account-form">
             <input type="text" defaultValue="username"></input>
              <br />
              <input type="text" defaultValue="password"></input>
              <br />
              <input type="text" defaultValue="confirm password"></input>
              <br />
              <button type="submit" className="bttn-new">Create Account</button>
              <br />
            </form>
        </section>
        )
    }
}
