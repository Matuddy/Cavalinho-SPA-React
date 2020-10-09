import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/footer"
import Sobre from "./components/sobre"
import Topo from "./components/topo"

class App extends Component{
  render(){
    return(
      <div className="App">
        <Topo></Topo>
        <Sobre></Sobre>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
