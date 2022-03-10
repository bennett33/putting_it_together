// import dependencies
import React, { Component } from 'react';

// initiate the class
class PersonCard extends Component{

    // Declare constructor to override out default constructor so that we can initially set the state object
    constructor(props){
        // Gives us all the functionality of the defaukt constructor that comes with Component
        super(props);
        this.state = {
            count: this.props.age
        }
    }


    // ageCount = (e) = {
    //     const count = this.state.count
    //     this.setState(prev => ({age: prev.count +1}));
    // }

    
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age {this.state.count}</p>
                <p>Hair Color: {hairColor}</p>
                <button class="btn btn-success" onClick={()=> this.setState({count: this.state.count+1})}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

// export the class
export default PersonCard;