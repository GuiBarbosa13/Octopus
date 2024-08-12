import { useContext } from 'react';
import Tarefa from '../../Types/Tarefa';
import styles from './FormEditTarefa.module.scss';
import { TarefaContext } from '../../context/TarefaContext';

interface Props {
    tarefa: Tarefa
}

export function FormEditTarefa({ tarefa }: Props) {
    const { tarefas } = useContext(TarefaContext);

    const tarefaEmEdicao = tarefas.filter(trf => trf.id === tarefa.id);

    return (
        <div className={styles.containerFormEditTarefa}>
            <h3 className={styles.containerFormEditTarefa__titulo}>Editar Tarefa</h3>
            <form className={styles.containerFormEditTarefa__form}>
                <button className={styles.containerFormEditTarefa__form__btnFechar}/>
                <div>
                    <input type="text" value={tarefa.titulo} className={styles.containerFormEditTarefa__form__inputText}/>
                    <select className={styles.containerFormEditTarefa__form__inputOption}>
                        <option>1</option>
                    </select>
                </div>
                <div>
                    <input type="date" value={tarefa.prazo ? tarefa.prazo.toISOString().split('T')[0] : ''} 
                        className={styles.containerFormEditTarefa__form__inputDate}
                    />
                    <button type="submit">Atualizar</button>
                </div>
            </form>
        </div>
    )
}