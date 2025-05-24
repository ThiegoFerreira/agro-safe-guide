
import { useState } from 'react';
import { Check } from 'lucide-react';

interface QuizProps {
  onComplete: (score: number) => void;
}

const Quiz = ({ onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Qual o melhor horário para aplicar herbicidas?",
      options: [
        "Meio-dia (12h-14h)",
        "Manhã (6h-10h) ou tarde (16h-18h)",
        "Durante a noite",
        "Qualquer horário"
      ],
      correct: 1
    },
    {
      question: "Qual a distância mínima de fontes de água para aplicação?",
      options: [
        "10 metros",
        "20 metros", 
        "30 metros",
        "50 metros"
      ],
      correct: 2
    },
    {
      question: "Quais EPIs são obrigatórios na aplicação?",
      options: [
        "Apenas luvas",
        "Luvas, máscara, óculos e roupas apropriadas",
        "Apenas máscara",
        "Botas e chapéu"
      ],
      correct: 1
    },
    {
      question: "Como deve ser o armazenamento do produto?",
      options: [
        "Em qualquer lugar",
        "Próximo a alimentos",
        "Local seguro, seco e ventilado",
        "Ao ar livre"
      ],
      correct: 2
    },
    {
      question: "Em que condições climáticas NÃO aplicar?",
      options: [
        "Dia ensolarado",
        "Dia com vento forte",
        "Temperatura amena",
        "Baixa umidade"
      ],
      correct: 1
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex.toString();
    setSelectedAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      setTimeout(() => {
        calculateScore(newAnswers);
      }, 500);
    }
  };

  const calculateScore = (answers: string[]) => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (parseInt(answer) === questions[index].correct) {
        score++;
      }
    });
    onComplete(score);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Teste de Conhecimento</h1>
            <p className="text-green-100">Questão {currentQuestion + 1} de {questions.length}</p>
          </div>
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <span className="text-2xl">🧠</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4 bg-white bg-opacity-20 rounded-full h-2">
          <div 
            className="bg-white rounded-full h-2 transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6 leading-relaxed">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                selectedAnswers[currentQuestion] === index.toString()
                  ? 'border-green-500 bg-green-50 text-green-800'
                  : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                  selectedAnswers[currentQuestion] === index.toString()
                    ? 'border-green-500 bg-green-500'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswers[currentQuestion] === index.toString() && (
                    <Check size={16} className="text-white" />
                  )}
                </div>
                <span className="font-medium">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Question Counter */}
      <div className="flex justify-center space-x-2">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index <= currentQuestion ? 'bg-green-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
