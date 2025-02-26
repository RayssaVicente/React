import { useState } from "react";

export default function useComentarios() {
    const [comentarios, setComentarios] = useState([]);

    const adicionarComentario = ({ comentario, email }) => {
        const id = Math.floor(Math.random() * 1000);
        const data = new Date().toLocaleString();
        const novoComentario = { id, email, comentario, data };
        
        setComentarios(state => {
            const novoState = [...state, novoComentario]; // Adiciona o novo comentário
            localStorage.setItem("obj-comentario", JSON.stringify(novoState));
            return novoState;
        });
    };

    return { comentarios, adicionarComentario };
}
