import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import PaginaPadrao from './components/PaginaPadrao';


function App() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= { <PaginaPadrao/>}>
            <Route path='/' element = { <Inicio/> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
