import React, { useState } from 'react';

// Definir las preguntas con respuestas correctas
const questions = [
  {
    id: 1,
    question: "¿En qué año se fundó el club Boca Juniors?",
    options: [
       "A. 1900" ,
       "B. 1902" ,
       "C. 1905" ,
       "D. 1910" 
    ],
    correctAnswer: "C. 1905"
  },
  {
    id: 2,
    question: "¿Cuál es el estadio de Boca Juniors?",
    options: [
       "A. Estadio Monumental" ,
       "B. Estadio Kempes" ,
       "C. Estadio La Bombonera" ,
       "D. Estadio Ciudad de La Plata" 
    ],
    correctAnswer: "C. Estadio La Bombonera"
  },
  {
    id: 3,
    question: "¿Cual es el preparado que aprendi primero y que siempre lo que veo digo que es ese preparado?",
    options: [
       "A. Pancreas" ,
       "B. Pulmon" ,
       "C. Cerebro" ,
       "D. Corazon" 
    ],
    correctAnswer: "A. Pulmon"
  },
  {
    id: 4,
    question: "¿Cuál es la principal función del tejido epitelial?",
    options: [
       "A. Conducir impulsos nerviosos" ,
       "B. Soportar y proteger órganos y estructuras internas" ,
       "C. Realizar la contracción y movimiento" ,
       "D. Absorber nutrientes y secretar sustancias" 
    ],
    correctAnswer: "D. Absorber nutrientes y secretar sustancias"
  },
  {
    id: 5,
    question: "¿Cuál de las siguientes estructuras es característica del tejido glandular exocrino del páncreas?",
    options: [
      "A. Islotes de Langerhans" ,
      "B. Acinos pancreáticos" ,
      "C. Células alfa" ,
      "D. Células beta" 
    ],
    correctAnswer: "B. Acinos pancreáticos"
  },
  {
    id: 6,
    question: "¿A quién echaron en Mantis?",
    options: [
      "A. Kler",
      "B. Tutu",
      "C. Kevin",
      "D. El pelotudo de Jordi"
    ],
    correctAnswer: "D. El pelotudo de Jordi"
  },
  {
    id: 7,
    question: "¿Qué canción me cantas cada vez que ves algo de Boca?",
    options: [
      "A. Cuando vas a la cancha",
      "B. Chu chu wah chu chu wah",
      "C. Psychosocial - Slipknot",
      "D. Lejos del vacío Mantis"
    ],
    correctAnswer: "A. Cuando vas a la cancha"
  },
  {
    id: 8,
    question: "¿Tu insulto recurrente?",
    options: [
      "A. Qué mierda",
      "B. Qué boludez",
      "C. La concha que te parió",
      "D. Oh rayos (? "
    ],
    correctAnswer: "C. La concha que te parió"
  },
  {
    id: 9,
    question: "¿Qué hacen los michis cuando estás en casa?",
    options: [
      "A. Llorar",
      "B. Saltar",
      "C. Morderte el culo",
      "D. Comer"
    ],
    correctAnswer: "C. Morderte el culo"
  },
  {
    id: 10,
    question: "¿Por qué te cuesta dormir en casa?",
    options: [
      "A. Ruidos fantasmas",
      "B. Ruidos de obreros nocturnos",
      "C. Los michis hacen bardo",
      "D. Kler ronca como Snorlax"
    ],
    correctAnswer: "D. Kler ronca como Snorlax"
  }
];

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [result, setResult] = useState({});

  const handleAnswerSelect = (option) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  };

  const handleNextQuestion = () => {
    if (answers[currentQuestionIndex]) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsQuizCompleted(true);
        calculateResults();
      }
    } else {
      alert("Debes seleccionar una respuesta antes de continuar.");
    }
  };

  const calculateResults = () => {
    const results = questions.reduce((acc, question, index) => {
      acc[question.id] = {
        selectedAnswer: answers[index],
        correctAnswer: question.correctAnswer,
        isCorrect: answers[index] === question.correctAnswer
      };
      return acc;
    }, {});
    setResult(results);
  };

  const renderQuiz = () => (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <div className='game-options'>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name={`question-${currentQuestionIndex}`}
              value={option}
              onChange={() => handleAnswerSelect(option)}
              checked={answers[currentQuestionIndex] === option}
            />
            {option}
          </label>
        ))}
      </div>
      <button className='button-game' onClick={handleNextQuestion}>Siguiente</button>
    </div>
  );

  const renderResults = () => (
    <div>
      <h2>Resultados</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <h4>{question.question}</h4>
          <p className='respuestas'>Respuesta seleccionada: {result[question.id]?.selectedAnswer}</p>
          <p className='respuestas'>Respuesta correcta: {result[question.id]?.correctAnswer}</p>
          <p className='respuestas'>Tu respuesta es {result[question.id]?.isCorrect ? 'correcta' : 'incorrecta'}</p>
        </div>
      ))}
      <p><strong>Felicidades por jugar, puede elegir un beso de nuestro adorable Kler, o lo que hay en esta caja ???</strong> </p>
    </div>
  );

  return (
    <div className='game'>
        <h2 className='juego'>Ahora te toca jugar un juego</h2>
      {isQuizCompleted ? renderResults() : renderQuiz()}
    </div>
  );
};

export default Game;
