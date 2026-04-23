import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import TodoList from "./components/features/todo/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
