import { createContext, useState } from "react";
import { ReactNode } from "react";
import Tarefa from "../Types/Tarefa";
// import { v4 as uuidv4 } from 'uuid';

interface TarefaProviderProps {
    children: ReactNode
};

interface TarefaContextType {
    tarefas: Tarefa[];
    setTarefas: React.Dispatch<any>;

    estadoForm: string;
    setEstadoForm: React.Dispatch<any>;
}

const valorDefaultContexto: TarefaContextType = {
    tarefas: [],
    setTarefas: () => { },
    estadoForm: '',
    setEstadoForm: () => { },
};

export const TarefaContext = createContext(valorDefaultContexto);

export const TarefaProvider = ({ children }: TarefaProviderProps) => {

    const [tarefas, setTarefas] = useState([
        /*{
        categoria: {
            cor: "green",
            titulo: 'Financeiro'
        },
        concluido: false,
        id: uuidv4(),
        prazo: new Date(),
        titulo: "Pagar contas"
        }*/
    ]);

    const [estadoForm, setEstadoForm] = useState('none');

    return (
        <TarefaContext.Provider value={{ tarefas, setTarefas, estadoForm, setEstadoForm }}>
            {children}
        </TarefaContext.Provider>
    );
}