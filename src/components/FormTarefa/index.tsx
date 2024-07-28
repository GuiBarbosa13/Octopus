import styles from './FormTarefa.module.scss';
import LogoBlack from '../../assets/logos/Logo-black.svg';
export default function FormTarefa() {
    return (
        <div className={styles.containerTarefa}>
            <form className={styles.containerTarefa__form}>
                
                <div className={styles.containerTarefa__form__containerImg}>
                    <div className={styles.containerTarefa__form__containerImg__img}>
                        <img src={LogoBlack} alt='Logo Octopus' />
                    </div>
                </div>

                <div className={styles.containerTarefa__form__inputTexto}>
                    <label>Nova Tarefa:</label>
                    <input type="text" />
                    <div className={styles.containerTarefa__form__inputTexto}>
                        <label>Prazo:</label>
                        <input type='date'></input>
                    </div>
                </div>


                <div>
                    <select>
                        <option disabled selected>Categoria</option>
                        <option value={'Finanças'}>Finanças</option>
                    </select>
                </div>

                <button type='submit'>Cadastrar</button>
            </form>
            <div className={styles.formTarefa__overlay}></div>
        </div>
    );
}