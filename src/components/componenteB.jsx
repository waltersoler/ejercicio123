import React, { useState } from 'react';
const ComponenteB = (props) => {
    
    const [estaConectado, setEstaConectado] = useState(false);
    function cambiarEstado() {
        setEstaConectado(!estaConectado);
        
    }

    return (
        <div>
      <p>Estado de conexión: {estaConectado ? 'Conectado': 'Desconectado'}</p>
      <button onClick={cambiarEstado}>
        {estaConectado ? 'Desconectar' : 'Conectar'}
      </button>
     
        </div>
    );
}

export default ComponenteB;
