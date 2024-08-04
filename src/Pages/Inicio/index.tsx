import CardTarefa from '../../components/CardTarefa';
import styles from './Inicio.module.scss'

let cards = [1,2,3,4,5,6,7,8,9];

export default function Inicio() {
    return (
        <section className={styles.main}>
            <h1>Suas Tarefas Pendentes</h1>
            <div className={styles.main__cardTarefaContainer}>
                {cards.map(tarefa => <CardTarefa id={tarefa.toString()} key={tarefa}/>)}
            </div>
        </section>
    );
}