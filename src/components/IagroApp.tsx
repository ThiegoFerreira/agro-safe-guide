
import { useState } from 'react';
import { Book, BookOpen } from 'lucide-react';

interface IagroAppProps {
  onNext: () => void;
}

const IagroApp = ({ onNext }: IagroAppProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = () => {
    setIsPlaying(true);
    // Simulate audio playback
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);

    // Use Web Speech API for text-to-speech
    if ('speechSynthesis' in window) {
      const text = "O Glifosato é um herbicida usado para eliminar ervas daninhas. Use equipamentos de proteção individual sempre. Aplique em dias sem vento, preferencialmente de manhã ou final da tarde. Mantenha distância de fontes de água e áreas habitadas. Armazene em local seguro, longe de crianças e animais.";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'pt-BR';
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 text-white flex-shrink-0">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-3">
            <span className="text-xl">🌱</span>
          </div>
          <div>
            <h1 className="text-xl font-bold">+Iagro</h1>
            <p className="text-green-100 text-sm">Guia de Boas Práticas</p>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-20">
        <div className="py-4 space-y-4">
          {/* Product Info */}
          <div className="bg-white rounded-3xl shadow-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mr-3">
                <Book className="text-green-600" size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Herbicida Glifosato</h2>
                <p className="text-gray-600 text-sm">Comprado em 15/01/2024</p>
              </div>
            </div>
          </div>

          {/* Simplified Guide */}
          <div className="bg-white rounded-3xl shadow-lg p-4">
            <div className="flex items-center mb-3">
              <BookOpen className="text-blue-600 mr-2" size={20} />
              <h3 className="text-lg font-bold text-gray-800">Resumo das Boas Práticas</h3>
            </div>
            
            <div className="space-y-3 text-gray-700">
              <div className="bg-green-50 rounded-2xl p-3">
                <h4 className="font-semibold text-green-800 mb-1 text-sm">🛡️ Segurança</h4>
                <p className="text-xs">Use sempre equipamentos de proteção individual (EPI): luvas, máscara, óculos e roupas apropriadas.</p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-3">
                <h4 className="font-semibold text-blue-800 mb-1 text-sm">🌤️ Aplicação</h4>
                <p className="text-xs">Aplique em dias sem vento, preferencialmente de manhã (6h-10h) ou final da tarde (16h-18h).</p>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-3">
                <h4 className="font-semibold text-yellow-800 mb-1 text-sm">💧 Meio Ambiente</h4>
                <p className="text-xs">Mantenha distância mínima de 30 metros de fontes de água, casas e áreas de convivência.</p>
              </div>

              <div className="bg-red-50 rounded-2xl p-3">
                <h4 className="font-semibold text-red-800 mb-1 text-sm">🔒 Armazenamento</h4>
                <p className="text-xs">Armazene em local seguro, seco e ventilado, longe de crianças, animais e alimentos.</p>
              </div>
            </div>
          </div>

          {/* Audio Section */}
          <div className="bg-white rounded-3xl shadow-lg p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3">🔊 Ouça o Resumo</h3>
            <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-3">
              <div className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isPlaying ? 'bg-green-500' : 'bg-blue-500'}`}>
                  <span className="text-white text-sm">{isPlaying ? '⏸️' : '▶️'}</span>
                </div>
                <div className="ml-3 flex-1">
                  <p className="font-semibold text-gray-800 text-sm">Resumo das Boas Práticas</p>
                  <p className="text-xs text-gray-600">{isPlaying ? 'Reproduzindo...' : 'Toque para ouvir'}</p>
                </div>
              </div>
              <button
                onClick={handlePlayAudio}
                className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                {isPlaying ? 'Pausar' : 'Ouvir'}
              </button>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Fazer Teste de Conhecimento
          </button>
        </div>
      </div>
    </div>
  );
};

export default IagroApp;
