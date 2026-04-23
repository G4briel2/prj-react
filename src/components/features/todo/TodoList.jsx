import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // AnimatePresence é chave para remoções
import { useNavigate } from "react-router-dom";

export default function TodoList() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("todo-tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([{ id: Date.now(), text: input, completed: false }, ...tasks]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-transparent p-4 flex items-center justify-center font-body">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-[2rem] p-8 border border-white/40 shadow-xl"
      >
        <button
          onClick={() => navigate("/")}
          className="mb-4 text-xs font-bold opacity-50 hover:opacity-100 transition-opacity uppercase tracking-widest"
        >
          ← Voltar ao Painel
        </button>

        <h2 className="font-display text-3xl font-black text-gray-800 mb-6 tracking-tighter ">
          Tarefas
        </h2>

        <form onSubmit={addTask} className="flex gap-2 mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nova tarefa..."
            className="flex-grow bg-white/50 border border-white/20 rounded-2xl px-4 py-3 outline-none focus:ring-2 ring-purple-400/50 transition-all text-sm"
          />
          <button className="bg-black text-white px-6 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all">
            +
          </button>
        </form>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 1,
                }}
                className="flex items-center justify-between bg-white/40 p-4 rounded-2xl border border-white/20 group hover:bg-white/60 transition-all"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="w-5 h-5 accent-purple-500 rounded-lg cursor-pointer"
                  />
                  <span
                    className={`text-sm font-medium transition-all ${task.completed ? "line-through text-gray-400" : "text-gray-700"}`}
                  >
                    {task.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="opacity-0 group-hover:opacity-100 text-rose-500 hover:scale-110 transition-all px-2"
                >
                  🗑️
                </button>
              </motion.div>
            ))}
          </AnimatePresence>

          {tasks.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 text-sm italic py-10"
            >
              Tudo limpo por aqui!
            </motion.p>
          )}
        </div>
      </motion.div>
    </div>
  );
}

