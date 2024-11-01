import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editar from "./pages/Editar";
import Lista from "./pages/Lista";
import Novo from "./pages/Novo";
import Erro404 from "./pages/Erro404";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/editar/:id" element={<Editar />} />
            <Route path="/" element={<Lista/>} />
            <Route path="/novo" element={<Novo/>} />
            <Route path="*" element={<Erro404/>} />

        </Routes>
      </BrowserRouter>
      
      <Novo></Novo>
      <Lista></Lista>
      <Editar></Editar>
      <Erro404></Erro404>
    </>
  );
}

export default App;