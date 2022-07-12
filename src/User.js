import React, { Component } from 'react';

class User extends Component {
  render() {
    const {name, cognome} = this.props;
    const user = 
      {
        nome: 'sara',
        surname: 'bianco',
        email: 's.b@gmail.com',
      };
     
  
    let {nome, surname, email} = user;
    console.log(user);
    return (
     <>
      <div className="user">
        ciao {name} {cognome}
      </div>
      <p> {nome} {surname} email: {email}</p>
     </>
    );
  }
}

export default User;