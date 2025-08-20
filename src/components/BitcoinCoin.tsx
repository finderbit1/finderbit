
import { Bitcoin } from "lucide-react";

const BitcoinCoin = () => {
  return (
    <div className="fixed top-1/2 left-0 z-40 animate-bitcoin-journey pointer-events-none">
      <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg animate-pulse-glow">
        <div className="absolute inset-0 rounded-full border-2 border-yellow-300 animate-rotate-slow opacity-50"></div>
        <Bitcoin className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-bounce-gentle"></div>
      </div>
    </div>
  );
};

export default BitcoinCoin;
