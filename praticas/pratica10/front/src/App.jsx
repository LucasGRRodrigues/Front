import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editar from "./pages/Editar";
import Lista from "./pages/Listar";
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
    </>
  );
}

export default App;