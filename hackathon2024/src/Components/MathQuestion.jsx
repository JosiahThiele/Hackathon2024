// MathQuestion.jsx
import React, { useState, useEffect } from 'react';

const MathQuestion = ({ questions, onSubmit }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    // Choose a random question when the component mounts or when the questions array changes
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  }, [questions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAnswerInt = parseInt(userAnswer, 10);

    if (!isNaN(userAnswerInt) && userAnswerInt === currentQuestion.answer) {
      setIsCorrect(true);
      onSubmit();
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="math-question-overlay">
      <div className="math-question">
        {currentQuestion && (
          <>
            <p>{currentQuestion.question}</p>
            <form onSubmit={handleSubmit}>
              <label>
                Answer:
                <input
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  required
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            {!isCorrect && <p style={{ color: 'red' }}>Incorrect answer. Try again.</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default MathQuestion;
