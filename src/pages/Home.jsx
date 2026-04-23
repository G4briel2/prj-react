import { motion } from "framer-motion";
import { Card } from "../components/Card";

export function Home() {
  const cardsData = [
    {
      title: "To-Do List",
      description:
        "Organize suas tarefas diárias com prioridades e categorias. Simples e direto.",
      color: "bg-blue-200/40",
      mainIcon: "📝",
      version: "v1.0",
      avatarLetter: "T",
    },
    {
      title: "Contador",
      description:
        "Um utilitário para monitorar cliques ou eventos em tempo real com persistência local.",
      color: "bg-purple-200/40",
      mainIcon: "🔢",
      version: "v1.2",
      avatarLetter: "C",
    },
    {
      title: "Jogo da Velha",
      description:
        "O clássico desafio de lógica para dois jogadores, agora com interface modernizada.",
      color: "bg-emerald-200/40",
      mainIcon: "🎮",
      version: "v2.0",
      avatarLetter: "V",
    },
    {
      title: "Calculadora",
      description:
        "Execução de operações matemáticas complexas com histórico de resultados.",
      color: "bg-amber-200/40",
      mainIcon: "🧮",
      version: "v1.5",
      avatarLetter: "C",
    },
    {
      title: "Buscador de CEP",
      description:
        "Integração via API para localização instantânea de endereços em todo o Brasil.",
      color: "bg-rose-200/40",
      mainIcon: "📍",
      version: "v2.1",
      avatarLetter: "L",
    },
  ];

  const tagsData = ["Todos", "Utilitários", "Games", "APIs", "Produtividade"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-10 flex flex-col items-center justify-center font-body">
      <div className="w-full max-w-[1200px] bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl flex flex-col gap-8">
        <header className="flex justify-between items-center gap-6">
          <div className="flex gap-10 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                Tools
              </span>
            </div>

            <nav className="flex gap-6 items-center text-gray-700 font-medium">
              <a
                href="#"
                className="font-bold text-gray-900 border-b-2 border-black"
              >
                Tools
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Pricing
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Features
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex gap-3">
            <button className="rounded-full border border-gray-300 px-6 py-2 font-bold text-sm text-gray-900 hover:bg-white/50 transition-all">
              Sign up
            </button>
            <button className="rounded-full bg-black px-6 py-2 font-bold text-sm text-white shadow-md hover:scale-105 transition-all">
              Register
            </button>
          </div>
        </header>

        <div className="flex justify-between items-center bg-gray-100/60 rounded-full p-2 shadow-inner font-body">
          <div className="flex gap-1">
            <div className="rounded-full bg-green-50 px-5 py-2 text-green-700 font-bold border border-green-100 text-sm">
              Tools
            </div>
            {tagsData.map((tag, index) => (
              <div
                key={index}
                className="rounded-full px-5 py-2 text-gray-600 border border-transparent hover:border-gray-200 hover:bg-white/40 cursor-pointer transition-all text-sm font-medium"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="flex gap-3 items-center text-gray-500 pr-3">
            <span className="text-xl">🔍</span>
            <span className="text-xl">❤️</span>
            <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white text-xs font-bold">
              GP
            </span>
            <span className="font-bold text-gray-900 text-sm">Gabriel</span>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {cardsData.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </motion.div>

        <footer className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest text-gray-500 mt-10">
          <div className="flex gap-4 items-center">
            <span>©2026. GABRIEL FIGMA</span>
          </div>
          <div className="flex-1 text-center font-display font-normal text-sm normal-case tracking-normal text-gray-400">
            Itapetininga, SP
          </div>
          <div className="flex gap-4 items-center">
            <span>📱</span>
            <span>💻</span>
            <span>⚙️</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

