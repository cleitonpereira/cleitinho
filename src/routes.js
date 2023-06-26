import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'

import Header from "./Components/Header";
import Erro from "./pages/Erro";

function RoutesApp(){
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home />} />

        <Route path="*" element= { <Erro /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
