import React, { Component } from 'react';

export default class Cell extends Component {
  
    constructor(props) {
        super() // call super() as this is required in React components when using this.state in the constructor
        this.state = {
            color: props.value
        }
    }

    handleClick = () => {
        //const newColor = '#333'
        this.setState({
            color: '#333'
        })
    }

  
  render() {
      
    

    return (
      <div 
        className="cell" 
        style={{backgroundColor: `${this.state.color}`}}
        onClick={this.handleClick}
      >

      </div>
    )
  }
  
}
