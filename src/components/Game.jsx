import React, { useState } from 'react';

const questions = [
  { id: 1, question: "Pregunta 1?", options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"] },
  { id: 2, question: "Pregunta 2?", options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"] },
  { id: 3, question: "Pregunta 3?", options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"] },
  { id: 4, question: "Pregunta 4?", options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"] },
  { id: 5, question: "Pregunta 5?", options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"] }
];

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

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
      }
    } else {
      alert("Debes seleccionar una respuesta antes de continuar.");
    }
  };

  const renderQuiz = () => (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <div>
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
      <button onClick={handleNextQuestion}>Siguiente</button>
    </div>
  );

  const renderResults = () => (
    <div>
      <h2>Resultados</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <h4>{question.question}</h4>
          <p>Respuesta seleccionada: {answers[index]}</p>
        </div>
      ))}
      {/* Aquí puedes agregar más lógica para dar una devolución personalizada */}
    </div>
  );

  return (
    <div className='game'>
        <h2>Ahora te toca jugar un juego</h2>
      {isQuizCompleted ? renderResults() : renderQuiz()}
    </div>
  );
};

export default Game;




