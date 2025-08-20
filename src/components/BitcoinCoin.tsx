
import { Bitcoin } from "lucide-react";

const BitcoinCoin = () => {
  return (
    <div className="fixed top-1/2 left-0 z-40 animate-bitcoin-journey pointer-events-none">
      <div className="relative w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-600 rounded-full shadow-lg animate-glow-pulse">
        <div className="absolute inset-0 rounded-full border-2 border-yellow-300 animate-rotate-slow opacity-60"></div>
        <div className="absolute inset-1 rounded-full border border-yellow-200 animate-rotate-slow opacity-40" style={{animationDirection: 'reverse', animationDuration: '20s'}}></div>
        <Bitcoin className="w-10 h-10 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-levitate" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-bounce-gentle"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
        {/* Trilha de partículas */}
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full opacity-70 animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-orange-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
};

export default BitcoinCoin;
