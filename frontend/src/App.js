import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages & container
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import About from './pages/About'
import Contact from './pages/Contact'

import Navbar from './components/Navbar'

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
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;