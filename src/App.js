import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import TodoList from "./components/features/todo/TodoList";
import ClickCounter from "./components/features/counter/ClickCounter";
import TicTacToe from "./components/features/velha/TicTacToe";
import Calculator from "./components/features/calculadora/Calculator";
import CepFinder from "./components/features/cep/CepFinder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/contador" element={<ClickCounter />} />
        <Route path="/jogo-da-velha" element={<TicTacToe />} />
        <Route path="/calculadora" element={<Calculator />} />
        <Route path="/buscacep" element={<CepFinder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
