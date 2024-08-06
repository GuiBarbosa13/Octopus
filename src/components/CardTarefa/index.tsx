// import LogoBlack from '../../assets/logos/Logo-black.svg';
import IconEdit from '../../assets/icons/edit_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import IconDelete from '../../assets/icons/delete_24dp_992B15_FILL0_wght400_GRAD0_opsz24.svg';
import styles from './CardTarefa.module.scss';
import Toogle from '../Toogle';
import Categoria from '../../Types/Categoria';

interface Props {
    id: string,
    titulo: string,
    data: Date | null,
    categoria: Categoria | null,
    concluido: boolean
}

export default function CardTarefa({ id, titulo, categoria, data }: Props) {

    if (!categoria || !data) {
        return
    }

    return (
        <div className={styles.cardTarefaContainer}>

            <div className={styles.cardTarefaContainer__infos}>
                <div className={styles.cardTarefaContainer__infos__cor} style={{ background: `linear-gradient(to right, ${categoria.cor}, transparent)` }}>

                </div>

                <div className={styles.cardTarefaContainer__infos__descricao} >

                    <h2 className={styles.cardTarefaContainer__infos__descricao__titulo}>
                        {titulo}
                    </h2>

                    <h3 className={styles.cardTarefaContainer__infos__descricao__categoria}>
                        {categoria.titulo}
                    </h3>

                    <h3 className={styles.cardTarefaContainer__infos__descricao__prazo}>
                        Prazo: {data.toLocaleDateString("pt-BR")}
                    </h3>

                </div>

            </div>



            <div className={styles.cardTarefaContainer__botoes}>
                <button>
                    <img src={IconEdit} alt='botão de editar' />
                </button>
                <button>
                    <img src={IconDelete} alt='botão de deletar' />
                </button>
            </div>

            <Toogle id={id} />
            {/* <div className={styles.cardTarefaContainer__botaoToogle}>
                <div className={styles.cardTarefaContainer__botaoToogle__toogle}>
                    <input type="checkbox" id="toggleCheckbox" />
                    <label htmlFor="toggleCheckbox"></label>
                </div>
            </div> */}
        </div>
    );
}