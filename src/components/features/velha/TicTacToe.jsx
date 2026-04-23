import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function TicTacToe() {
  const navigate = useNavigate();
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((square) => square !== null);
  const status = winner
    ? `Vencedor: ${winner}`
    : isDraw
      ? "Empate!"
      : `Próximo: ${isXNext ? "X" : "O"}`;

  const handleClick = (i) => {
    if (winner || board[i]) return;
    const newBoard = board.slice();
    newBoard[i] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="min-h-screen bg-transparent p-4 flex items-center justify-center font-body">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/40 shadow-2xl"
      >
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-[10px] font-bold opacity-40 hover:opacity-100 transition-all uppercase tracking-widest"
        >
          ← Sair do Jogo
        </button>

        <h2 className="font-display text-3xl font-black text-gray-800 mb-2 tracking-tighter text-center">
          Jogo da velha
        </h2>

        <div
          className={`text-center mb-8 font-bold text-sm uppercase tracking-widest ${winner ? "text-emerald-600 animate-bounce" : "text-gray-500"}`}
        >
          {status}
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          {board.map((square, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleClick(i)}
              className="h-24 bg-white/50 border border-white/20 rounded-2xl shadow-inner flex items-center justify-center text-4xl font-display font-black text-gray-800"
            >
              <AnimatePresence mode="wait">
                {square && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    className={
                      square === "X" ? "text-indigo-600" : "text-rose-500"
                    }
                  >
                    {square}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        <button
          onClick={resetGame}
          className="w-full bg-black text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-gray-900 transition-all shadow-lg"
        >
          Reiniciar Partida
        </button>
      </motion.div>
    </div>
  );
}

