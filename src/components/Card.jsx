export const Card = ({
  title,
  description,
  color,
  mainIcon,
  version,
  avatarLetter,
}) => (
  <div
    className={`flex flex-col ${color} rounded-3xl p-6 shadow-lg h-full transition-transform hover:scale-[1.02] cursor-pointer border border-white/20`}
  >
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center text-2xl shadow-inner backdrop-blur-sm">
        {mainIcon}
      </div>
      <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center bg-white/20 text-xs font-bold text-gray-700 backdrop-blur-md">
        {avatarLetter}
      </div>
    </div>
    <div className="flex-grow">
      <h3 className="text-xl font-black text-gray-800 mb-2 tracking-tight font-display">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
    <div className="flex justify-end mt-6">
      <div className="rounded-full bg-black/5 px-4 py-1 text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-black/5">
        {version}
      </div>
    </div>
  </div>
);

