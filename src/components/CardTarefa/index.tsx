// import LogoBlack from '../../assets/logos/Logo-black.svg';
import IconEdit from '../../assets/icons/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import IconDelete from '../../assets/icons/delete_24dp_992B15_FILL0_wght400_GRAD0_opsz24.svg';
import styles from './CardTarefa.module.scss';

export default function CardTarefa() {
    return (
        <div className={styles.cardTarefaContainer}>

            <div className={styles.cardTarefaContainer__alerta} style={{ backgroundColor: 'green' }}>

            </div>

            {/* <div className={styles.cardTarefaContainer__iconeContainer}>

                <div className={styles.cardTarefaContainer__iconeContainer__img}
                    style={{ backgroundColor: 'green' }}>
                    <img src={LogoBlack} alt="Logo Octopus" />
                </div>

            </div> */}

            <div className={styles.cardTarefaContainer__descricao}>

                <h2 className={styles.cardTarefaContainer__descricao__titulo}>
                    Pagar boleto Enel valor R$ 125,78
                </h2>

                <h3 className={styles.cardTarefaContainer__descricao__categoria}>
                    Finanças
                </h3>

                <h3 className={styles.cardTarefaContainer__descricao__prazo}>
                    Prazo: 15/04/2024
                </h3>

            </div>

            <div className={styles.cardTarefaContainer__botoes}>
                <button>
                    <img src={IconEdit} alt='botão de editar'/>
                </button>
                <button>
                    <img src={IconDelete} alt='botão de deletar'/>
                </button>
            </div>

            <div className={styles.cardTarefaContainer__botaoToogle}>
                <div className={styles.cardTarefaContainer__botaoToogle__toogle}>
                    <input type="checkbox" id="toggleCheckbox" />
                    <label htmlFor="toggleCheckbox"></label>
                </div>
            </div>
        </div>
    );
}