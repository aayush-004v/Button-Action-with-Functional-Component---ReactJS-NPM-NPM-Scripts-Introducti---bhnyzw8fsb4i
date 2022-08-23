import React, {Component,useState} from "react";
import '../styles/App.css';
class App extends Component {
    constructor(props) {
    super(props);
    this.state={
      display: false
    };
   this.changePara=this.changePara.bind(this)	    
	    
  };
  changePara(){
    this.setState({display:true})
  }
  

    render() {
    	return(
    		<div id="main">
		<button id="click" onClick={this.changePara}>Click</button>
		{this.state.display===true?<p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:''}
    
    		</div>
    	);
    }
}


export default App;
