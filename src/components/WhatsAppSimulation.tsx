
import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

interface WhatsAppSimulationProps {
  onNext: () => void;
}

const WhatsAppSimulation = ({ onNext }: WhatsAppSimulationProps) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Status Bar */}
      <div className="bg-green-600 text-white px-4 py-2 flex justify-between items-center text-sm">
        <span>9:41</span>
        <span>Vivo 4G</span>
        <span>100%</span>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="bg-white mx-4 mt-4 rounded-lg shadow-lg p-4 border-l-4 border-green-500 animate-fade-in">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <MessageSquare size={16} className="text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">+Iagro</p>
              <p className="text-xs text-gray-500">agora</p>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            Consta a compra do produto Herbicida Glifosato na data 15/01/2024 em seu nome...
          </p>
        </div>
      )}

      {/* WhatsApp Interface */}
      <div className="bg-green-600 p-4 flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
        <div>
          <h1 className="text-white font-semibold">+Iagro</h1>
          <p className="text-green-100 text-sm">online</p>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen p-4" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPgo=')" }}>
        
        {showMessage && (
          <div className="flex justify-start mb-4 animate-fade-in">
            <div className="bg-white rounded-2xl rounded-tl-md p-4 max-w-xs shadow-sm">
              <p className="text-gray-800 text-sm leading-relaxed">
                Olá! Consta a compra do produto <strong>Herbicida Glifosato</strong> na data <strong>15/01/2024</strong> em seu nome.
              </p>
              <p className="text-gray-800 text-sm leading-relaxed mt-2">
                Por gentileza, acesse o Guia de Boas Práticas relacionados ao produto e tenha mais informações sobre seu uso seguro e eficiente.
              </p>
              <p className="text-xs text-gray-500 mt-2">9:42</p>
            </div>
          </div>
        )}

        {showMessage && (
          <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2">
            <button
              onClick={onNext}
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 transition-colors animate-fade-in"
            >
              Acessar +Iagro
            </button>
          </div>
        )}
      </div>

      {/* WhatsApp Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Digite uma mensagem"
            className="flex-1 bg-transparent outline-none text-sm"
            disabled
          />
          <button className="ml-2 text-gray-400">
            <MessageSquare size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppSimulation;
