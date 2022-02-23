import React, { Component } from 'react';

export default class Matrix extends Component {
  

  // every row will map through its vals to create an array of <div className="cell"> JSX.
  genRow = (vals) => {
    // console.log(vals) //=> array row

    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
     // Here we are specifying our Cell component should have a value prop
  }

  // genMatrix is an instance method which maps this.props.values to an array of JSX. 
    // Basically, every 'row' in this.props.values will create a <div className="row">
  genMatrix = () => {
     // console.log(this.props.values) //=> full array
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}


Matrix.defaultProps = {
  values:[
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  ]
}

//Matrix.defaultProps = {
//   values: (() => {
//     const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
//     return (new Array(10).fill(defRow))
//   })()
// }