
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6 text-white">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
            <span className="text-2xl">🌱</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">+Iagro</h1>
            <p className="text-green-100">Guia de Boas Práticas</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Product Info */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mr-4">
              <Book className="text-green-600" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">Herbicida Glifosato</h2>
              <p className="text-gray-600">Comprado em 15/01/2024</p>
            </div>
          </div>
        </div>

        {/* Simplified Guide */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <BookOpen className="text-blue-600 mr-3" size={24} />
            <h3 className="text-lg font-bold text-gray-800">Resumo das Boas Práticas</h3>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <div className="bg-green-50 rounded-2xl p-4">
              <h4 className="font-semibold text-green-800 mb-2">🛡️ Segurança</h4>
              <p className="text-sm">Use sempre equipamentos de proteção individual (EPI): luvas, máscara, óculos e roupas apropriadas.</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">🌤️ Aplicação</h4>
              <p className="text-sm">Aplique em dias sem vento, preferencialmente de manhã (6h-10h) ou final da tarde (16h-18h).</p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">💧 Meio Ambiente</h4>
              <p className="text-sm">Mantenha distância mínima de 30 metros de fontes de água, casas e áreas de convivência.</p>
            </div>

            <div className="bg-red-50 rounded-2xl p-4">
              <h4 className="font-semibold text-red-800 mb-2">🔒 Armazenamento</h4>
              <p className="text-sm">Armazene em local seguro, seco e ventilado, longe de crianças, animais e alimentos.</p>
            </div>
          </div>
        </div>

        {/* Audio Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">🔊 Ouça o Resumo</h3>
          <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4">
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isPlaying ? 'bg-green-500' : 'bg-blue-500'}`}>
                <span className="text-white text-xl">{isPlaying ? '⏸️' : '▶️'}</span>
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-800">Resumo das Boas Práticas</p>
                <p className="text-sm text-gray-600">{isPlaying ? 'Reproduzindo...' : 'Toque para ouvir'}</p>
              </div>
            </div>
            <button
              onClick={handlePlayAudio}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              {isPlaying ? 'Pausar' : 'Ouvir'}
            </button>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Fazer Teste de Conhecimento
        </button>
      </div>
    </div>
  );
};

export default IagroApp;
