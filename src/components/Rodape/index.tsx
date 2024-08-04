import styles from './Rodape.module.scss';
import polvoRodape from '../../assets/polvo-rodape.svg';

export default function Rodape() {
    return (

        <footer className={styles.rodape}>
            {/* <p>Desenvolvido por Guilherme Barbosa</p> */}
            <img src={polvoRodape} alt='imagem de Polvo' />
        </footer>

    )
}