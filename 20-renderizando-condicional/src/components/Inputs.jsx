import {useState} from 'react'
import PropTypes from "prop-types"

Input.prototype = {
    tamanhoSenha: PropTypes.number,
    setTamanhoSenha: PropTypes.func
}

export default function Input(props){
    

    return(
        <input type="number" id='tamanhoSenha' min={1} value={props.tamanhoSenha}  
        onChange={(ev) => props.setTamanhoSenha(ev.target.value)}/>
    )
}