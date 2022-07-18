import React, { Component } from 'react';
import './med.css'
class BasicInfo extends Component {
    constructor(props) {
        super();
        this.state = {
            person: {        
                name: props.name,
                state: props.state,
                email: props.email,
                birthdate: props.birthdate,
                cell_number: props.cell_number
               }
        };
    }
    
    render() {
        return (
            <div className="person">
                
                <h1>{this.state.person.name}</h1>
                <hr/>
                <p> State:  {this.state.person.state}</p>
                <p> Email: {this.state.person.email}</p>
                <p> Birthdate: {this.state.person.birthdate}</p>
                <p> Cell Number: {this.state.person.cell_number}</p>
                
                <hr/>
            </div>
            
        );
    }
}

export default BasicInfo;
/*MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page) */