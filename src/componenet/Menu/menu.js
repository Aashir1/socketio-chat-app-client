import React, { Component } from 'react';
import './menu.css';
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Pacifico:300,400,700', 'sans-serif']
  }
});

const styles={
  
}


class Menu extends Component {

  constructor(props){
    super(props);
    this.state={
      className:"toggle"
    }
  }
  changeClass = () =>{
    let {className} = this.state;
    console.log(this.state.className)
    if(this.state.className === "toggle"){
      className = "toggle active";
    }else{
      className = "toggle";
    }
    this.setState({className});
  }

  render() {
    return (
      <div className="body" >
        <div className={`menu ${this.props.showMenu}`}>
        </div>
      </div>
    );
  }
}

export default Menu;
