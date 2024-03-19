// // ProgressChart.js
// import React, { useRef, useEffect } from 'react';
// import Chart from 'chart.js/auto';

// const ProgressChart = ({ correctAnswers, totalQuestions }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d');

//       new Chart(ctx, {
//         type: 'pie',
//         data: {
//           labels: ['Correct Answers', 'Incorrect Answers'],
//           datasets: [{
//             data: [correctAnswers, totalQuestions - correctAnswers],
//             backgroundColor: [
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(255, 99, 132, 0.2)'
//             ],
//             borderColor: [
//               'rgba(75, 192, 192, 1)',
//               'rgba(255, 99, 132, 1)'
//             ],
//             borderWidth: 1
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           plugins: {
//             title: {
//               display: true,
//               text: 'User Progress'
//             }
//           }
//         }
//       });
//     }
//   }, [correctAnswers, totalQuestions]);

//   return <canvas ref={chartRef}></canvas>;
// };

// export default ProgressChart;
