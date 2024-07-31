import styles from './Botao.module.scss';

interface Props{
    background: string,
    titulo: string,
}

export default function Botao({background, titulo}: Props){
    return(
        <button className={styles.button} style={{backgroundColor: background}}>
            {titulo}
        </button>
    )
}