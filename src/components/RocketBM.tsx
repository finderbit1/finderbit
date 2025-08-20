import { Rocket } from "lucide-react";

const RocketBM = () => {
  return (
    <div className="fixed top-1/2 left-0 z-39 animate-rocket-chase pointer-events-none">
      <div className="relative w-20 h-24 transform rotate-45">
        {/* Corpo do foguete */}
        <div className="relative w-12 h-20 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-600 rounded-t-full rounded-b-lg mx-auto shadow-lg animate-wiggle">
          {/* Janela do foguete */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-2 border-white">
            {/* Letras B e M */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-xs leading-none">BM</span>
            </div>
            <div className="absolute inset-0 rounded-full animate-pulse bg-cyan-300 opacity-30"></div>
          </div>
          
          {/* Detalhes do foguete */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-red-500 rounded-full"></div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-400 rounded-full"></div>
          
          {/* Aletas */}
          <div className="absolute bottom-0 -left-1 w-3 h-4 bg-gray-500 transform rotate-45 rounded-bl-lg"></div>
          <div className="absolute bottom-0 -right-1 w-3 h-4 bg-gray-500 transform -rotate-45 rounded-br-lg"></div>
        </div>
        
        {/* Chamas do foguete */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-4 h-6 bg-gradient-to-b from-orange-500 via-red-500 to-yellow-400 rounded-b-full animate-pulse opacity-80"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gradient-to-b from-yellow-400 to-orange-600 rounded-b-full animate-bounce-gentle"></div>
        </div>
        
        {/* Partículas de escape */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-1 bg-orange-500 rounded-full opacity-60 animate-ping" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute left-1 w-1 h-1 bg-yellow-500 rounded-full opacity-50 animate-ping" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute left-2 w-1 h-1 bg-red-500 rounded-full opacity-70 animate-ping" style={{animationDelay: '0.6s'}}></div>
        </div>
        
        {/* Ícone Lucide como backup visual */}
        <Rocket className="absolute top-2 right-2 w-4 h-4 text-primary opacity-50 animate-pulse" />
      </div>
    </div>
  );
};

export default RocketBM;