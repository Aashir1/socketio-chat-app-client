import React, { Component } from 'react';
import Menu from '../Menu/menu';
import background from '../../images/background.jpg';
import './App.css';
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Pacifico:300,400,700', 'sans-serif']
  }
});

const styles={
  header:{
    background: 'rgba(0, 0, 0, 0.5)',
    backgroundImage: `url(${background})`,
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      className:"toggle",
      menuActive: '',
    }
  }
  changeClass = () =>{
    let {className, menuActive} = this.state;
    console.log(this.state.className)
    if(this.state.className === "toggle"){
      className = "toggle active";
      menuActive = 'toggle';
    }else{
      className = "toggle";
      menuActive = "";
    }
    this.setState({className, menuActive});
  }

  render() {
    return (
      <div className="body" >

      {/* **************************************** Header Start *******************************************/}
      <header style={styles.header}>
        <div className="header">
          <div>
            Portfolio
          </div>
          <div className={this.state.className} onClick={this.changeClass}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <Menu showMenu = {this.state.menuActive}/>  
        <div className="heading">
          <h1>
            <span>Aashir Khan</span>
            {` `}
            Front-End
            <br />
            Developer
          </h1>
          <p>
            with a passion for learning
          </p>
        </div>
      </header>  
      {/* **************************************** Header End *******************************************/}
      
      </div>
    );
  }
}

export default App;
