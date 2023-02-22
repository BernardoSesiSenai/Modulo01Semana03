import React from 'react';

const Formulario = () => {
  return (
    <div>Formulario
        <form>
            <label>
                <span>Nome:</span>
                <input name='name' placeholder='Digite seu nome' type="text" />
                <input type="submit" value="enviar" />
            </label>
        </form>
    </div>
  )
};

export default Formulario;