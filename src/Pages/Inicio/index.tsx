import { useContext } from 'react';
import CardTarefa from '../../components/CardTarefa';
import styles from './Inicio.module.scss'
import { TarefaContext } from '../../context/TarefaContext';



export default function Inicio() {
    const { tarefas } = useContext(TarefaContext);

    return (
        <section className={styles.main}>
            <h1>Suas Tarefas Pendentes</h1>
            <div className={styles.main__cardTarefaContainer}>
                {tarefas.map(tarefa => <CardTarefa id={tarefa.id} categoria={tarefa.categoria} concluido={tarefa.concluido} titulo={tarefa.titulo} data={tarefa.prazo} key={tarefa.id} />)}
            </div>
        </section>
    );
}