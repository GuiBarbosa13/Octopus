import styles from './Toogle.module.scss';

interface Props{
    id: string
}

export default function Toogle({id}:Props) {
    return (
        <div className={styles.botaoToogle}>
            <div className={styles.botaoToogle__toogle}>
                <input type="checkbox" id={id} className={styles.botaoToogle__toogle__input} />
                <label htmlFor={id} className={styles.botaoToogle__toogle__label}></label>
            </div>
        </div>
    )
}