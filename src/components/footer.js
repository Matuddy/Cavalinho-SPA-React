import React, { Component } from 'react';

class foter extends Component{
    constructor(){
        super()
        this.state = {
            contato: "descobre ai",
            email: "nao lenbro",
            ano:"2000 e pouco",
            autor: "eu"
        }
        
    }

    render(){
        return(
            <footer className="footer">
                <p>fale conosco: telefone: {this.state.contato} - E-mail: {this.state.email}</p>
                <p>copyright@{this.state.ano} - {this.state.autor}</p>
            </footer>
        );
    }
}

export default sobre