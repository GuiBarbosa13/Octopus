import { useContext } from 'react';
import CardTarefa from '../../components/CardTarefa';
import styles from './Inicio.module.scss'
import { TarefaContext } from '../../context/TarefaContext';



export default function Inicio() {
    const { tarefas } = useContext(TarefaContext);

    if (tarefas.length <= 0) {
        return (
            <section className={styles.main}>
                <div className={styles.main__avisoContainer}>
                    <h1>Sem tarefas pendentes</h1>
                </div>
            </section>
        )
    }

    return (
        <section className={styles.main}>
            <h1>Suas Tarefas Pendentes</h1>
            <div className={styles.main__cardTarefaContainer}>
                {tarefas.map(tarefa => <CardTarefa tarefa={tarefa}/>)}
            </div>
        </section>
    );
}