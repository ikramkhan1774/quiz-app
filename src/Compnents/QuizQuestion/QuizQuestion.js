


import React, { useState, useRef } from 'react';
import './QuizQuestion.css';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ProgressBar from '../ProgressBar/ProgressBar';




const QuizQuestion = ({ question, onAnswerSubmit, totalQuestions, questions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const pdfRef = useRef(null);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === '') {
      toast.error("Please select an answer");
      return;
    }


    console.log(question);

    onAnswerSubmit(selectedAnswer);

    if (selectedAnswer === question.correct_answer) {
      toast.success("Hurrah Correct Answer ");
    } else {
      toast.error("Sorry, Wrong Answer");
    }

    setAnswers([...answers, selectedAnswer]);
    setSelectedAnswer('');
  };

  const handleGeneratePDF = () => {
    if (answers.length === questions.length) {
      // Get the component reference
      const input = pdfRef.current;

      // Convert the component to a canvas
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
        pdf.save('quiz_report.pdf');
      });
    }
  };

  return (
    <div className='container' ref={pdfRef}>
      <ProgressBar currentQuestionIndex={answers.length} totalQuestions={questions.length} />
    
      <h3 className='question-card'>{question.question}</h3>
      <div className='flex'>
        {question.incorrect_answers.concat(question.correct_answer).sort().map((answer, index) => (
          <div key={index} className='answer-option'>
            <input
              type="radio"
              id={answer}
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={handleAnswerChange}
              hidden
            />
            <label htmlFor={answer}>{answer}</label>
          </div>
        ))}
      </div>
      <button className='button' onClick={handleSubmit}>Submit Answer</button>
      {handleGeneratePDF()}
    </div>
  );
};

export default QuizQuestion;
