import React, { Component } from 'react';

class sobre extends Component{
    constructor(props){
        super()
        this.stete = {
            name: 'fulano',
            age: props.age
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
            name: "fulanok"
        })
    }

    render(){
        return(
            <div id="sobre" className="py-5 by-dark">
                <h1>SOBRE</h1>
                <p>this.state.text</p>
                <p>eu sou o {this.stete}</p>
                <button onclick={this.setName}>Mudar nome</button>
            </div>
        )
    }
}