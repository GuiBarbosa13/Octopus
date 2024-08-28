import styles from './FormTarefa.module.scss';
import { useContext, useState } from 'react';
import { TarefaContext } from '../../context/TarefaContext';
import Tarefa from '../../Types/Tarefa';
import { v4 as uuidv4 } from 'uuid';
import Categoria from '../../Types/Categoria';
import categoriasCadastradas from '../../data/categorias';
export default function FormTarefa() {

    const { setTarefas, tarefas, estadoForm, setEstadoForm } = useContext(TarefaContext);

    function aoAbrirForm(estadoForm: string) {
        setEstadoForm(estadoForm === 'none' ? 'flex' : 'none');
    }

    const categorias: Categoria[] = categoriasCadastradas;

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState<Categoria | null>(null);
    const [prazo, setPrazo] = useState<Date | null>(null);

    const cadastrarTarefa = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!categoria || !prazo) {
            return
        }

        const novaTarefa: Tarefa = {
            id: uuidv4(),
            titulo,
            categoria,
            prazo,
            concluido: false,
            emEdicao: false
        }

        setTarefas([...tarefas, novaTarefa]);

        setTitulo('');
        setCategoria(null);
        setPrazo(null);
    }

    return (
        <div className={styles.containerTarefa}> 
            <form className={styles.containerTarefa__form} onSubmit={cadastrarTarefa}>
                <div className={styles.containerTarefa__form__inputTexto}>
                    <label htmlFor='tituloTarefa'>Nova Tarefa:</label>
                    <input
                        type="text"
                        id='tituloTarefa'
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)} 
                    />

                    <select
                        id='categoriaTarefa'
                        value={categoria ? categoria.titulo : ''}
                        onChange={(e) => {
                            const selectedCategory = categorias.find(cat => cat.titulo === e.target.value);
                            setCategoria(selectedCategory || null);
                        }}
                    >
                        <option disabled value={""}>Escolha uma categoria</option>
                        {categorias.map(cat => <option key={cat.titulo} value={cat.titulo}>{cat.titulo}</option>)}
                    </select>
                </div>


                <div className={styles.containerTarefa__form__inputPrazo}>
                    <label htmlFor='prazoTarefa'>Prazo:</label>
                    <input
                        type='date'
                        id='prazoTarefa'
                        value={prazo ? prazo.toISOString().split('T')[0] : ''}
                        onChange={(e) => setPrazo(new Date(e.target.value + ' 00:00:00'))}
                    ></input>
                </div>
                <div className={styles.containerTarefa__form__containerButton}>
                    <button type='submit' onClick={() => {aoAbrirForm(estadoForm)}}>
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
}