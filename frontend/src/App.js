import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home2 from "./pages/Home2";
import Login from './pages/Login'
function App() {

  return (
    
    <>
    <Router>

      <Routes>
        <Route path='/' element={<Home2/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

    </Router>

    </>
   
  );
}

export default App;