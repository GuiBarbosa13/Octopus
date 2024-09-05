import { useContext, useRef } from 'react';
import LogoBlack from '../../assets/logos/Logo-black.svg';
import FormTarefa from '../FormTarefa';
import styles from './header.module.scss';
import { TarefaContext } from '../../context/TarefaContext';

export default function Header() {

    const { estadoForm, setEstadoForm } = useContext(TarefaContext);
    const checkboxRef = useRef<HTMLInputElement>(null);

    function aoAbrirForm(estadoForm: string) {
        setEstadoForm(estadoForm === 'none' ? 'flex' : 'none');

        // Fechar o menu hamburguer ao clicar
        if (checkboxRef.current) {
            checkboxRef.current.checked = false; // Desmarcar o checkbox
        }
    }

    return (
        <header className={styles.header}>
            <nav>
                <img src={LogoBlack} alt='Logo Octopus' />

                <input ref={checkboxRef} type='checkbox' className={styles.header__menu} id='header__menu' />


                <label htmlFor='header__menu' className={styles.header__menu__label} />

                <ul className={styles.lista__menu}>
                    <li className={styles.header__home}>
                        {estadoForm === 'none' ? 'Home' : ''}
                    </li>
                    <li>
                        {estadoForm === 'none' ? 'Tarefas concluídas' : ''}
                    </li>
                    <li onClick={() => aoAbrirForm(estadoForm)}>
                        {estadoForm === 'none' ? 'Cadastrar Tarefa' : 'Fechar'}
                    </li>
                </ul>
            </nav>

            <div className={styles.header__formTarefa} style={{ display: `${estadoForm}` }}>
                <FormTarefa />
            </div>
        </header>
    );
}