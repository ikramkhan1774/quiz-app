import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create PDF component
const PdfReport = ({ answers, questions }) => {
  const passThreshold = 3; // Threshold for passing the quiz
  let totalCorrectAnswers = 0;

  // Count total correct answers
  answers.forEach((answer, index) => {
    if (answer === questions[index].correct_answer) {
      totalCorrectAnswers++;
    }
  });

  // Determine pass/fail status
  const passStatus = totalCorrectAnswers >= passThreshold ? 'Pass' : 'Fail';

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.section}>Quiz Report</Text>
        <Text style={styles.section}>Total Questions: 10</Text>
        <Text style={styles.section}>Correct Answers: {totalCorrectAnswers}</Text>
        <Text style={styles.section}>Wrong Answers: {10-totalCorrectAnswers}</Text>
        <Text style={styles.section}>Status: {passStatus}</Text>
        {questions.map((question, index) => (
          <Text key={index} style={styles.section}>
            {`Question ${index + 1}: ${question.question}\n`}
            {/* {answers[index] === question.correct_answer ? ( */}
              <Text> - Correct Answer: {question.correct_answer}</Text>
            {/* ) : ( */}
            {"\n\n"}
              <Text> - Your Answer: {answers[index]}</Text>
            {/* )} */}
          </Text>
        ))}
      </Page>
    </Document>
  );
};

export default PdfReport;

