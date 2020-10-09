import React, { Component } from 'react';

class footer extends Component{
    constructor(){
        super()
        this.state = {
            contato: "esqueci",
            email: "nao lenbro",
            ano:"2000 e pouco",
            autor: "autor eu mesmo"
        }
    }

    render(){
        return(
            <footer className="footer bg-dark">
                <p>fale conosco: ou não - telefone: {this.state.contato} - E-mail: {this.state.email}</p>
                <p>copyright@{this.state.ano} - {this.state.autor}</p>
            </footer>
        );
    }
}

export default footer   