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

                    <select>
                        <option disabled defaultValue={'Categoria'}>Categoria</option>
                        <option value={'Finanças'}>Finanças</option>
                    </select>
                </div>


                <div className={styles.containerTarefa__form__inputPrazo}>
                    <label>Prazo:</label>
                    <input type='date'></input>
                </div>
                <div className={styles.containerTarefa__form__containerButton}>
                    <button onClick={(e) => e.preventDefault()}>Cadastrar</button>
                </div>
            </form>
            <div className={styles.formTarefa__overlay}></div>
        </div>
    );
}