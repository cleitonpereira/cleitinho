import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Contato from './pages/Contato'

import Header from "./Components/Header";
import Erro from "./pages/Erro";

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/contato" element= { <Contato /> } />

        <Route path="*" element= { <Erro /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
