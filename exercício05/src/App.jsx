import FormComentarios from "./components/FormComentarios";
import useComentarios from "./hooks/useComentarios";

export default function App() {
    const { comentarios, adicionarComentario } = useComentarios(); // Chamar o hook corretamente

    return (
        <div className="app">
            <h2>Seção de Comentários</h2>
            <FormComentarios adicionarComentario={adicionarComentario} /> {/* Passar a função correta */}
            <section id="comentarios">
                {comentarios.length > 0 ? (
                    comentarios.map((comentario) => (
                        <div key={comentario.id}>
                            <h3>{comentario.email}</h3>
                            <p>{comentario.comentario}</p>
                            <span>{comentario.data}</span>
                        </div>
                    ))
                ) : (
                    <p>Não há comentários ainda.</p>
                )}
            </section>
        </div>
    );
}
