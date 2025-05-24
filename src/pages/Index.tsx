
import { useState } from 'react';
import WhatsAppSimulation from '../components/WhatsAppSimulation';
import IagroApp from '../components/IagroApp';
import Quiz from '../components/Quiz';
import Navigation from '../components/Navigation';
import MobileContainer from '../components/MobileContainer';

type Screen = 'whatsapp' | 'iagro' | 'quiz' | 'result';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('whatsapp');
  const [quizScore, setQuizScore] = useState(0);

  const handleScreenChange = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setCurrentScreen('result');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'whatsapp':
        return <WhatsAppSimulation onNext={() => handleScreenChange('iagro')} />;
      case 'iagro':
        return <IagroApp onNext={() => handleScreenChange('quiz')} />;
      case 'quiz':
        return <Quiz onComplete={handleQuizComplete} />;
      case 'result':
        return (
          <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🏆</span>
                </div>
                <h1 className="text-2xl font-bold text-green-800 mb-2">Parabéns!</h1>
                <p className="text-gray-600">Você completou o treinamento</p>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 mb-6">
                <p className="text-lg font-semibold text-green-800 mb-2">Sua pontuação:</p>
                <p className="text-3xl font-bold text-green-600">{quizScore}/5</p>
                <p className="text-sm text-green-700 mt-2">
                  {quizScore >= 4 ? 'Excelente conhecimento!' : 
                   quizScore >= 3 ? 'Bom conhecimento!' : 
                   'Revise o conteúdo e tente novamente!'}
                </p>
              </div>

              <button
                onClick={() => handleScreenChange('whatsapp')}
                className="w-full bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Começar Novamente
              </button>
            </div>
          </div>
        );
      default:
        return <WhatsAppSimulation onNext={() => handleScreenChange('iagro')} />;
    }
  };

  return (
    <MobileContainer>
      <div className="relative h-screen">
        {renderScreen()}
        {currentScreen !== 'result' && (
          <Navigation 
            currentScreen={currentScreen} 
            onScreenChange={handleScreenChange} 
          />
        )}
      </div>
    </MobileContainer>
  );
};

export default Index;
