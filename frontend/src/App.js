import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home2 from "./pages/Home2";
import Login from './pages/Login'
import Header from './components/Header';
import Footer2 from './components/Footer2'
function App() {

  return (
    
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home2/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer2/> 
    </Router>

    </>
   
  );
}

export default App;