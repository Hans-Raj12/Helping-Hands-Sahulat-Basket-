import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages & container
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import DonorSignup from './components/DonorSignup'

function App() {
  return (
    <div className="container">
      <Router>
      <Navbar/> 
      
        <div className='pages'>
          
        <Routes>      
            <Route
              path='/'
              element={<Home/>}
            />
            <Route
              path='/login'
              element={<Login/>}
            />
            <Route
              path='/signup'
              element={<Signup/>}
            />
            <Route
              path='/about'
              element={<About/>}
            />
            <Route
              path='/contact'
              element={<Contact/>}
            />
            <Route
              path='/donor-signup'
              element={<DonorSignup/>}
            />
      
      </Routes>
        </div>
        <Footer/>
              
      </Router>
      
    </div>
  );
}

export default App;