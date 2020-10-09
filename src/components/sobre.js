import React, { Component } from 'react';
import '../style/sobre.css'

class Sobre extends Component{
    constructor(props){
        super()
        this.stete = {
            name: 'fulano',
        }
        this.setName = this.setName.bind(this) 
    }

    setName(){
        this.setState({
            name: 'Ciclanildo'
        })
    }

    resetName(){
        this.setState({
            name: "fulano"
        })
    }

    render(){
        return(
            <div id="sobre" className="bg-dark sobre">
                <h1>SITE DO BATMAN</h1>
            </div>
        )
    }
}

export default Sobre