import LogoBlack from '../../assets/logos/Logo-black.svg';
import FormTarefa from '../FormTarefa';
import styles from './header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
            <img src={LogoBlack} alt='Logo Octopus'/>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Tarefas concluídas
                    </li>
                    <li className={styles.header__menuTarefa}>
                        Cadastrar tarefa
                        <div className={styles.header__formTarefa}>
                            <FormTarefa />
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
}