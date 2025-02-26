import { useState } from "react";

export default function FormComentarios({ adicionarComentario }) { // Recebe a função via props
    const [email, setEmail] = useState("");
    const [comentario, setComentario] = useState("");

    const formSubmit = (ev) => {
        ev.preventDefault();
        adicionarComentario({ email, comentario });
        setEmail("");
        setComentario("");
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} required onChange={(ev) => setEmail(ev.target.value)} />
            
            <label htmlFor="comentario">Comentário</label>
            <textarea id="comentario" cols="30" rows="6" value={comentario} onChange={(ev) => setComentario(ev.target.value)}></textarea>
            
            <button type="submit" className="botao">Enviar comentário</button>
        </form>
    );
}
