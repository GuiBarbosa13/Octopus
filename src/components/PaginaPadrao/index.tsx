import { Outlet } from "react-router-dom";
import Header from "../header";
import Rodape from "../Rodape";
import styles from './PaginaPadrao.module.scss';

export default function PaginaPadrao() {
    return (
        <div className={styles.containerPaginaPadrao}>
            <Header />

            <Outlet />

            <Rodape />
        </div>
    )
}