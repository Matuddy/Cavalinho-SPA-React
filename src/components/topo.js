import { render } from '@testing-library/react';
import React, { Component } from 'react';

//function Topo(){
//    return(
//        <header>
//            <nav>
//                <a>home</a>
//            </nav>
//        </header>
//    );
//}

class Topo extends Component{
    render(){
        return(
            <nav>
            eu sou o {this.props.neme}
            <img src={this.props.ing}></img>
            </nav>
        )
    }
}

export default Topo;