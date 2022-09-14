import React from "react";

const ButtonLimpar = ({ apagarDados }) => {
    return (
        <button className="btn-azul" type="button" onClick={apagarDados}>
          Limpar Monstros
        </button>
    );
};

export default ButtonLimpar;