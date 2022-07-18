import React, { Component } from 'react';

export default class BasicInfo extends Component {
  render () {
    return (
      <div>
          <h1>{this.props.name}</h1>
          <h3>{this.props.state}</h3>
          <h3>{this.props.email}</h3>
          <h3>{this.props.birthdate}</h3>
          <h3>{this.props.cell_number}</h3>
         
      </div>
    );
  }
}

// return (
//     <div>
//         <h1>Madison</h1>
//         <h3>NC</h3>
//         <h3>fakeemail@gmail.com</h3>
//         <h3>July 31</h3>
//         <h3>1234567890</h3>
//     </div>

// VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.

