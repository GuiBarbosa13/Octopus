import Categoria from "./Categoria";

export default interface Tarefa{
    id:string,
    titulo:string,
    categoria: Categoria,
    prazo:Date
}