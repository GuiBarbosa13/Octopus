import { useContext, useState, useEffect } from 'react';
import Tarefa from '../../Types/Tarefa';
import styles from './FormEditTarefa.module.scss';
import { TarefaContext } from '../../context/TarefaContext';
import categoriasCadastradas from '../../data/categorias';

interface Props {
    tarefa: Tarefa
}

export function FormEditTarefa({ tarefa }: Props) {
    const { tarefas, setTarefas, estadoFormEditTarefa, setEstadoFormEditTarefa } = useContext(TarefaContext);

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [prazo, setPrazo] = useState('');

    // Atualiza os valores do formulário quando a tarefa em edição muda
    useEffect(() => {
        if (tarefa.emEdicao) {
            setTitulo(tarefa.titulo);
            setCategoria(tarefa?.categoria?.titulo || '');
            setPrazo(tarefa?.prazo ? tarefa.prazo.toISOString().split('T')[0] : '');
        }
    }, [tarefa]);

    const aoEditar = (e: React.FormEvent) => {
        e.preventDefault();

        const tarefasAtualizadas = tarefas.map((task) =>
            task.emEdicao
                ? {
                    ...task,
                    titulo: titulo,
                    categoria: categoriasCadastradas.find(cat => cat.titulo === categoria),
                    prazo: prazo ? new Date(prazo) : undefined,
                    emEdicao: false
                }
                : task
        );

        setTarefas(tarefasAtualizadas);
        setEstadoFormEditTarefa('none');
    };

    // Renderiza o formulário apenas se a tarefa estiver em edição
    if (!tarefa.emEdicao) {
        return null;
    }

    return (
        <div className={styles.containerFormEditTarefa} style={{ display: estadoFormEditTarefa }}>
            <h3 className={styles.containerFormEditTarefa__titulo}>Editar Tarefa</h3>
            <form className={styles.containerFormEditTarefa__form} onSubmit={aoEditar}>
                <button 
                    className={styles.containerFormEditTarefa__form__btnFechar} 
                    onClick={() => { setEstadoFormEditTarefa('none') }}
                />

                <div>
                    <input
                        type="text"
                        value={titulo}
                        className={styles.containerFormEditTarefa__form__inputText}
                        onChange={(e) => setTitulo(e.target.value)} 
                    />
                    <select
                        className={styles.containerFormEditTarefa__form__inputOption}
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        {categoriasCadastradas.map(categoria => (
                            <option key={categoria.titulo}>{categoria.titulo}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <input
                        type="date"
                        value={prazo}
                        className={styles.containerFormEditTarefa__form__inputDate}
                        onChange={(e) => setPrazo(e.target.value)}
                    />
                    <button type="submit">Atualizar</button>
                </div>
            </form>
        </div>
    )
}
