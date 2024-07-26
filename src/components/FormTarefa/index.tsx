export default function FormTarefa(){
    return(
        <div>
            <form>
                <label>Nova Tarefa:</label>
                <input type="text"/>
                <label>Categoria:</label>
                <select>
                    <option value={1}>1</option>
                </select>
            </form>
        </div>
    );
}