import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import ComponenteB from './componenteB';
import ComponenteB from './componenteB';

class ComponenteA extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            
            Conectado: false,
        }
        
    }
    render() {
        return (
            <div>
                <h1>
                    Bienvenido { this.props.Nombre } { this.props.Apellido }...!
                </h1>
                <h3>
                    { this.props.Email }
                </h3>
                <h2>
                <ComponenteB> </ComponenteB>
                </h2>
            </div>
        );
    }
    cambiarEstado = ()=>{
    
    }
}


ComponenteA.propTypes = {
    Nombre: PropTypes.string,
    Apellido: PropTypes.string,
    Email: PropTypes.string,
    Conectado: PropTypes.bool,
};


export default ComponenteA;
