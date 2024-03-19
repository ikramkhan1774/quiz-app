
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuizQuestion from '../QuizQuestion/QuizQuestion.js';
import PdfReport from '../PdfReport/PdfReport.js';
import { PDFDownloadLink } from '@react-pdf/renderer';


const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [totalMarks, setTotalMarks] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
      setQuestions(response.data.results);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswerSubmit = (answer) => {
    const isCorrect = answer === questions[currentQuestionIndex]?.correct_answer;
    setAnswers([...answers, answer]);
    if (isCorrect) {
    setTotalMarks(prevTotalMarks => prevTotalMarks + 5); 
  }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    console.log(answers, "Correct Answers Array");
  };

  return (
    <div>
        <div style={{ position: 'absolute', top: '10px', left: '10px',backgroundColor:"blue",padding:"10px",color:"white" }}>Total Marks: {totalMarks}</div>
      {currentQuestionIndex < questions.length ? (
       <QuizQuestion
       question={questions[currentQuestionIndex]}
       onAnswerSubmit={handleAnswerSubmit}
       totalQuestions={questions?.length}
       questions={questions} 
     />
     
      ) : ( 
        <div>
          <h2 style={{marginTop:"60px",marginLeft:"10px"}}>Quiz Completed!</h2>
          <PDFDownloadLink document={<PdfReport answers={answers} questions={questions} />} fileName="quiz_report.pdf">
            {({ blob, url, loading, error }) =>
              loading ? 'Generating PDF...' : 'Download PDF Report'
            }
          </PDFDownloadLink>
        </div>
      )} 
    </div>
  );
};

export default QuizApp;
