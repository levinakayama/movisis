import './App.css';
import Main from './Main.jsx'
import Carrinho from '../src/components/Carrinho'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";


function App() {
    
  
  return (
    <>      
      <Router>
        <Routes>
            <Route  path='/' element = { <Main /> }  exact/>
            <Route path='/Carrinho' element = { <Carrinho /> } />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
