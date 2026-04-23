import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ClickCounter() {
  const navigate = useNavigate();

  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("click-count");
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("click-count", count);
  }, [count]);

  return (
    <div className="min-h-screen bg-transparent p-4 flex items-center justify-center font-body">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-white/30 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/40 shadow-2xl text-center"
      >
        <button
          onClick={() => navigate("/")}
          className="mb-8 text-[10px] font-bold opacity-40 hover:opacity-100 transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-2 w-full"
        >
          ← Voltar ao Dashboard
        </button>

        <h2 className="font-display text-2xl font-black text-gray-800 mb-2 tracking-tighter">
          Contador
        </h2>
        <p className="text-xs text-gray-500 mb-10 font-medium">
          Sessão de cliques ativa
        </p>

        <div className="relative mb-12 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={count}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="font-display text-8xl font-black text-gray-900 drop-shadow-sm"
            >
              {count}
            </motion.span>
          </AnimatePresence>

          <div className="absolute inset-0 bg-purple-200/20 blur-3xl rounded-full -z-10" />
        </div>

        <div className="flex flex-col gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCount(count + 1)}
            className="w-full bg-black text-white py-5 rounded-3xl font-bold text-lg shadow-lg shadow-black/20"
          >
            Clicar
          </motion.button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setCount(0)}
              className="bg-white/40 border border-white/30 py-3 rounded-2xl text-xs font-bold text-gray-600 hover:bg-rose-100/50 hover:text-rose-600 transition-all"
            >
              Resetar
            </button>
            <button
              onClick={() => setCount(count > 0 ? count - 1 : 0)}
              className="bg-white/40 border border-white/30 py-3 rounded-2xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-all"
            >
              Diminuir
            </button>
          </div>
        </div>

        <div className="mt-10">
          <div className="w-full h-1 bg-black/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-black"
              initial={{ width: 0 }}
              animate={{ width: `${count % 100}%` }}
            />
          </div>
          <p className="text-[9px] uppercase tracking-widest font-bold text-gray-400 mt-2">
            Progresso até {Math.ceil((count + 1) / 100) * 100}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

