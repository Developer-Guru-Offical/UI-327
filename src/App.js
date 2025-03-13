
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Routess from './Pages/Routess';
import './App.css';
import { UserContexProvider } from './Context/UserContex';

function App() {
  return (
    <UserContexProvider>
       <Router>
        <Header />
        <Routess />
      </Router>
      </UserContexProvider>
   );
}

export default App;
