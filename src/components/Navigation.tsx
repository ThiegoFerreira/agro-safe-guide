
interface NavigationProps {
  currentScreen: string;
  onScreenChange: (screen: 'whatsapp' | 'iagro' | 'quiz') => void;
}

const Navigation = ({ currentScreen, onScreenChange }: NavigationProps) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-2xl px-6 py-3">
      <div className="flex space-x-6">
        <button
          onClick={() => onScreenChange('whatsapp')}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            currentScreen === 'whatsapp'
              ? 'bg-green-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span className="text-xl">💬</span>
        </button>
        
        <button
          onClick={() => onScreenChange('iagro')}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            currentScreen === 'iagro'
              ? 'bg-blue-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span className="text-xl">🌱</span>
        </button>
        
        <button
          onClick={() => onScreenChange('quiz')}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            currentScreen === 'quiz'
              ? 'bg-green-500 text-white shadow-lg'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span className="text-xl">🧠</span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;
