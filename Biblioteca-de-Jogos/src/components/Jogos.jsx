

import PropTypes from "prop-types"

Jogo.PropTypes = {
    titulo: PropTypes.string,
    capa: PropTypes.string,
    remover: PropTypes.func
}

export default function Jogo ({titulo, capa, remover}){
    return(
        <div>
        <img src={capa} alt="Capa do jogo" />
        <div>
          <h2>{titulo}</h2>
          <button onClick={remover}>
            Remover
          </button>
        </div>
      </div>
    )
}