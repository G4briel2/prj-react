import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Calculator() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");

  const handleNumber = (num) => {
    setDisplay(display === "0" ? String(num) : display + num);
  };

  const handleOperator = (op) => {
    setEquation(display + " " + op + " ");
    setDisplay("0");
  };

  const calculate = () => {
    try {
      const result = Function(`return ${equation + display}`)();
      setDisplay(String(result));
      setEquation("");
    } catch (error) {
      setDisplay("Erro");
    }
  };

  const clear = () => {
    setDisplay("0");
    setEquation("");
  };

  const buttons = [
    {
      label: "AC",
      action: clear,
      style: "col-span-2 bg-rose-200/50 text-rose-700",
    },
    {
      label: "DEL",
      action: () => setDisplay(display.slice(0, -1) || "0"),
      style: "bg-gray-200/50",
    },
    {
      label: "/",
      action: () => handleOperator("/"),
      style: "bg-amber-100/50 text-amber-700",
    },
    { label: "7", action: () => handleNumber(7) },
    { label: "8", action: () => handleNumber(8) },
    { label: "9", action: () => handleNumber(9) },
    {
      label: "*",
      action: () => handleOperator("*"),
      style: "bg-amber-100/50 text-amber-700",
    },
    { label: "4", action: () => handleNumber(4) },
    { label: "5", action: () => handleNumber(5) },
    { label: "6", action: () => handleNumber(6) },
    {
      label: "-",
      action: () => handleOperator("-"),
      style: "bg-amber-100/50 text-amber-700",
    },
    { label: "1", action: () => handleNumber(1) },
    { label: "2", action: () => handleNumber(2) },
    { label: "3", action: () => handleNumber(3) },
    {
      label: "+",
      action: () => handleOperator("+"),
      style: "bg-amber-100/50 text-amber-700",
    },
    { label: "0", action: () => handleNumber(0), style: "col-span-2" },
    {
      label: ".",
      action: () => !display.includes(".") && setDisplay(display + "."),
    },
    { label: "=", action: calculate, style: "bg-black text-white" },
  ];

  return (
    <div className="min-h-screen bg-transparent p-4 flex items-center justify-center font-body">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xs bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-6 border border-white/40 shadow-2xl"
      >
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-[10px] font-bold opacity-40 hover:opacity-100 transition-all uppercase tracking-widest"
        >
          ← Dashboard
        </button>

        <div className="bg-black/5 rounded-3xl p-6 mb-6 text-right overflow-hidden shadow-inner border border-black/5">
          <div className="text-xs text-gray-400 font-medium h-4 mb-1">
            {equation}
          </div>
          <div className="text-4xl font-display font-black text-gray-800 truncate leading-none">
            {display}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn, i) => (
            <motion.button
              key={i}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={btn.action}
              className={`h-14 rounded-2xl flex items-center justify-center font-bold text-sm transition-colors border border-white/20 shadow-sm ${btn.style || "bg-white/40 text-gray-700"}`}
            >
              {btn.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
