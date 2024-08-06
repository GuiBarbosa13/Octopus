import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import PaginaPadrao from './components/PaginaPadrao';
import { TarefaProvider } from './context/TarefaContext';


function App() {

  return (
    <main>
      <BrowserRouter>
        <TarefaProvider>
          <Routes>
            <Route path='/' element={<PaginaPadrao />}>
              <Route path='/' element={<Inicio />} />
            </Route>
          </Routes>
        </TarefaProvider>
      </BrowserRouter>
    </main>
  )
}

export default App
