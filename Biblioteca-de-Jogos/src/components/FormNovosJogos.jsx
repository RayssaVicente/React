import PropTypes from "prop-types";
import InputTexto from "./InputTexto";
import { useState } from "react";

FormNovosJogos.propTypes = {
    adicionarJogos: PropTypes.func
};

export default function FormNovosJogos({ adicionarJogos }) {
    const [titulo, setTitulo] = useState("");
    const [capa, setCapa] = useState("");

    const formSubmit = (ev) => {
        ev.preventDefault();
        adicionarJogos({ titulo, capa });
        setTitulo("");
        setCapa("");
    }

    return (
        <form onSubmit={formSubmit}>
            <InputTexto id="titulo" label="Título" value={titulo} onChange={(ev) => setTitulo(ev.target.value)} />
            <InputTexto id="capa" label="Capa" value={capa} onChange={(ev) => setCapa(ev.target.value)} />
            <button type="submit">Adicionar a biblioteca</button>
        </form>
    );
}
