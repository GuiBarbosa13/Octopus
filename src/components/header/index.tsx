import { useContext } from 'react';
import LogoBlack from '../../assets/logos/Logo-black.svg';
import FormTarefa from '../FormTarefa';
import styles from './header.module.scss';
import { TarefaContext } from '../../context/TarefaContext';

export default function Header() {

    const {estadoForm, setEstadoForm} = useContext(TarefaContext);

    function aoAbrirForm(estadoForm: string) {
        setEstadoForm(estadoForm === 'none' ? 'flex' : 'none');
    }

    return (
        <header className={styles.header}>
            <nav>
                <img src={LogoBlack} alt='Logo Octopus' />
                <ul>
                    <li>
                        {estadoForm === "none"? "Home" : ""}
                    </li>
                    <li>
                        {estadoForm === "none"? "Tarefas concluídas" : ""}
                    </li>
                    <li className={styles.header__menuTarefa} onClick={() => aoAbrirForm(estadoForm)}>
                        {estadoForm === "none"? "Cadastrar tarefa" : "Fechar"}
                    </li>
                </ul>
            </nav>

            <div className={styles.header__formTarefa} style={{ display: `${estadoForm}` }}>
                <FormTarefa />
            </div>
        </header>
    );
}