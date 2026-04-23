import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CepFinder() {
  const navigate = useNavigate();
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const cleanCep = cep.replace(/\D/g, "");

    if (cleanCep.length !== 8) {
      setError("O CEP deve conter 8 dígitos.");
      return;
    }

    setLoading(true);
    setError("");
    setAddress(null);

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cleanCep}/json/`,
      );
      const data = await response.json();

      if (data.erro) {
        setError("CEP não encontrado.");
      } else {
        setAddress(data);
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent p-4 flex items-center justify-center font-body">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/30 backdrop-blur-md rounded-[2.5rem] p-8 border border-white/40 shadow-2xl"
      >
        <button
          onClick={() => navigate("/")}
          className="mb-6 text-[10px] font-bold opacity-40 hover:opacity-100 transition-all uppercase tracking-widest"
        >
          ← Painel Geral
        </button>

        <h2 className="font-display text-3xl font-black text-gray-800 mb-2 tracking-tighter">
          Buscador de CEP
        </h2>
        <p className="text-xs text-gray-500 mb-8 font-medium">
          Consulte endereços em tempo real
        </p>

        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="Ex: 18200000"
            maxLength="9"
            className="flex-grow bg-white/50 border border-white/20 rounded-2xl px-4 py-3 outline-none focus:ring-2  transition-all font-body text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-6 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
          >
            {loading ? "..." : "🔍"}
          </button>
        </form>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-rose-100/60 border border-rose-200 text-rose-700 px-4 py-3 rounded-2xl text-xs font-bold mb-4"
            >
              ⚠️ {error}
            </motion.div>
          )}

          {address && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="bg-white/60 p-5 rounded-3xl border border-white/40 shadow-sm">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                  Logradouro
                </p>
                <p className="font-display text-xl font-bold text-gray-800">
                  {address.logradouro || "N/A"}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                      Bairro
                    </p>
                    <p className="text-sm font-bold text-gray-700">
                      {address.bairro}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                      Cidade/UF
                    </p>
                    <p className="text-sm font-bold text-gray-700">
                      {address.localidade} - {address.uf}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

