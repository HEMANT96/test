import React,{ Component } from 'react';

export default class Salary extends Component{
  constructor(props){
    super(props)
    this.state = {
      pay: 0,
      monthlyPay: 0,
      yearlyPay: 0,
      BasicPay:0,
      HRA:0,
      EPF:0,
      ERPF:0,
      FBP:0,
      ERSI:0,
      ESI:0,

    }

    this.changeYearly = this.changeYearly.bind(this)
    this.changeMonthly =this.changeMonthly.bind(this)
  }
  
  changeMonthly(event){
    this.setState({
      monthlyPay1: Math.round(event.target.value),
      BasicPay1:Math.round(event.target.value*0.4),
      HRA1:Math.round(event.target.value*0.2),
      EPF1:Math.round(event.target.value*0.048),
      ERPF1:Math.round(event.target.value*0.048),
  
    })
  }



  changeYearly(event){
    this.setState({
      monthlyPay: Math.round(100*event.target.value/12)/100,
      yearlyPay: Math.round(event.target.value),
      BasicPay:Math.round(event.target.value*0.4),
      HRA:Math.round(event.target.value*0.2),
      EPF:Math.round(event.target.value*0.048),
      ERPF:Math.round(event.target.value*0.048),
      ERSI:Math.round(event.target.value*.0475),
      ESI:Math.round(event.target.value*.0175),
      FBP:Math.round((this.state.BasicPay + this.state.HRA +this.state.EPF + this.state.ERPF +this.state.ERSI +this.state.ESI )),
    })
  }
  render(){
    return (
      <div className = 'container-fluid'>
        <div className = 'header'>
          <h1>Yearly Salary Calculator</h1><h4>( before taxes )</h4>
        </div>


        <div className = 'information'>
          <div className = 'row'>
            <h3>Yearly Pay</h3><h3> ₹ {this.state.yearlyPay}</h3><input onChange = {this.changeYearly}></input>
          </div>
          <div className = 'row'>
            <h3>Monthly Pay</h3><h3> ₹ {this.state.monthlyPay}</h3>
            {/* <input onChange = {this.changeMonthly}></input> */}
          </div>
          
          <div className = 'row'>
            <h3>Basic Pay</h3><h3> ₹ {this.state.BasicPay}</h3>
            {/* <input onChange = {this.changeYearly}></input> */}
          </div>
          

          <div className = 'row'>
            <h3>HRA</h3><h3> ₹ { this.state.HRA }</h3>
          </div>

          <div className = 'row'>
            <h3>EPF</h3><h3> ₹ { this.state.EPF }</h3>
          </div>

          <div className = 'row'>
            <h3>ERPF</h3><h3> ₹ { this.state.ERPF }</h3>
          </div>
          <div className = 'row'>
            <h3>ERSI</h3><h3> ₹ { this.state.ERSI }</h3>
          </div>

          <div className = 'row'>
            <h3>ESI</h3><h3> ₹ { this.state.ESI }</h3>
          </div>

          <div className = 'row'>
            <h3>FBP</h3><h3> ₹ {this.state.FBP }</h3>
          </div>
        </div>
<div className = 'header'>
          <h1>Monthly Salary Calculator</h1><h4>( before taxes )</h4>
        </div>
 <div className = 'information'>
 <div className = 'row'>
   <h3>Monthly Pay</h3><h3> ₹ {this.state.monthlyPay1}</h3><input onChange = {this.changeMonthly}></input>
 </div>
 <div className = 'row'>
            <h3>Basic Pay</h3><h3> ₹ {this.state.BasicPay1}</h3>
                      </div>
                      <div className = 'row'>
            <h3>HRA</h3><h3> ₹ {this.state.HRA1}</h3>
          </div>

          <div className = 'row'>
            <h3>EPF</h3><h3> ₹ {this.state.EPF1}</h3>
          </div>

          <div className = 'row'>
            <h3>ERPF</h3><h3> ₹ {this.state.ERPF1}</h3>
          </div>

 </div>

</div>
    )
  }
}