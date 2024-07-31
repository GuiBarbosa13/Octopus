import CardTarefa from '../../components/CardTarefa';
import styles from './Inicio.module.scss'

export default function Inicio() {
    return (
        <section className={styles.main}>
            <h1>Suas Tarefas Pendentes</h1>
            <div className={styles.main__cardTarefaContainer}>
                <CardTarefa/>
                <CardTarefa/>
                <CardTarefa/>
                <CardTarefa/>
                <CardTarefa/>
                <CardTarefa/>
                <CardTarefa/>
                <CardTarefa/>
                <CardTarefa/>
            </div>
        </section>
    );
}