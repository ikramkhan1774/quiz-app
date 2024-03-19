
 import './App.css';
import QuizApp from './Compnents/QuizApp/QuizApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return <>
    <QuizApp />
    <ToastContainer />
  </>
}

export default App;
