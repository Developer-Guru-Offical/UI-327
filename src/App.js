
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Routess from './Pages/Routess';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routess />
      </Router>
    </>
  );
}

export default App;
