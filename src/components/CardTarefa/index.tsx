import IconEdit from '../../assets/icons/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import IconDelete from '../../assets/icons/delete_24dp_992B15_FILL0_wght400_GRAD0_opsz24.svg';
import styles from './CardTarefa.module.scss';
import Toogle from '../Toogle';
import { useContext } from 'react';
import { TarefaContext } from '../../context/TarefaContext';
import { FormEditTarefa } from '../FormEditTarefa';
import Tarefa from '../../Types/Tarefa';

interface Props {
    tarefa: Tarefa
}

export default function CardTarefa({ tarefa }: Props) {

    const { tarefas, setTarefas, setEstadoFormEditTarefa } = useContext(TarefaContext);

    function aoDeletar(identificador: string) {
        const tarefasFiltradas = tarefas.filter(tarefa => tarefa.id !== identificador);
        setTarefas(tarefasFiltradas);
    }

    if (!tarefa.categoria || !tarefa.prazo) {
        return null;
    }

    const aoEditar = (task: Tarefa) => {
        const tarefasAtualizadas = tarefas.map(tarefa =>
            tarefa.id === task.id ? { ...tarefa, emEdicao: true } : tarefa
        );

        setTarefas(tarefasAtualizadas);
    }

    return (
        <>
            <div className={styles.cardTarefaContainer}>

                <div className={styles.cardTarefaContainer__infos}>
                    <div className={styles.cardTarefaContainer__infos__cor} style={{ background: `linear-gradient(to right, ${tarefa.categoria.cor}, transparent)` }}>

                    </div>

                    <div className={styles.cardTarefaContainer__infos__descricao} >

                        <h2 className={styles.cardTarefaContainer__infos__descricao__titulo}>
                            {tarefa.titulo}
                        </h2>

                        <h3 className={styles.cardTarefaContainer__infos__descricao__categoria}>
                            {tarefa.categoria.titulo}
                        </h3>

                        <h3 className={styles.cardTarefaContainer__infos__descricao__prazo}>
                            Prazo: {new Date(tarefa.prazo).toLocaleDateString('pt-BR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                            })}
                        </h3>

                    </div>

                </div>

                <div className={styles.cardTarefaContainer__botoes}>
                    <button
                        onClick={() => {
                            setEstadoFormEditTarefa('flex');
                            aoEditar(tarefa);
                        }}>
                        <img src={IconEdit} alt='botão de editar' />
                    </button>
                    <button onClick={() => { aoDeletar(tarefa.id) }}>
                        <img src={IconDelete} alt='botão de deletar' />
                    </button>
                </div>
                <Toogle id={tarefa.id} />
            </div>
            <FormEditTarefa tarefa={tarefa} />
        </>
    );
}