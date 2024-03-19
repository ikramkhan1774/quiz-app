
import React from 'react';
import './ProgressBar.css'

const ProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className='progress-bar-container'>
      <div className='progress-bar' style={{ width: `${progress}%` }}></div>
      <div className='progress-text'>{`Question ${currentQuestionIndex + 1} of ${totalQuestions}`}</div>
    </div>
  );
};

export default ProgressBar;
