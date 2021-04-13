import React,{Component} from 'react';
import './Bmi.css';



class Bmi extends Component {

constructor(props) {
    super(props);
    this.state = {
     input1:"!Your Health Is YOur Life!",
     input2:""
    }
}



///// PARA EL WEIGHT

Calculate = (event) => {
var height = document.getElementById("lion1").value;
var weight = document.getElementById("lion2").value;

if((height%1>=0) && (weight%1>=0)) {

var heightInMss = height/100;
var bmi = weight/(heightInMss * heightInMss);
document.getElementById("row1").innerHTML = alert("Your Body Mass Index is:" + " " + bmi.toFixed(2));

}
  


else  {
       alert("Please Enter a Valid Number!");
   }
   
   if (bmi<=18.5) {
       alert("You are underweight");
   }


   else if(bmi>18.5 && bmi<=24.9) {
     alert("GREAT! You are in good shape!!!!!");
   }

   else if(bmi>24.9 && bmi<=29.9) {
     alert("You are not in good health");
   }
   
   
 
   
   


}





render() {

    return (
        <div className="Cuerpo">
            <div className="Pelo">
           
              <h1 className="Mafia">YOUR BODY MASS CALCULATOR!</h1>
 
              <div className="row">
              <h1 className="alto">Height:</h1><p className="mega"> (In Centimeters)</p> <input type="text" id="lion1" />
              </div>
              <br/>

              <div className="row">
              <h1 className="alto">Weight:</h1><p className="mega">(In Kilograms)</p><input type="text" id="lion2"/>
              </div>
              <br/>


              

              <div className="row">
              <button onClick={this.Calculate}>Body Mass</button> 
              </div>
              <br />
              <div id="row1">Great News!</div>

              <div className="row2">{this.state.input1}</div>

              

              

              

             </div>   
        </div>
    )
}

}







export default Bmi