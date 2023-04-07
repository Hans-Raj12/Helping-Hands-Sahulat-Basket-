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
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Comment from './pages/Comment'
import Product from './pages/Product'
import ProductList from './pages/ProductList'

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
            <Route path='/sidebar' element={<Sidebar/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='analytics' element={<Analytics/>}/>
            <Route path='comment' element={<Comment/>}/>
            <Route path='product' element={<Product/>}/>
            <Route path='productList' element={<ProductList/>}/>
            </Route>
            
            
            
            
      </Routes>
      </div>
     
      <Footer/>   
      </Router>

      {/* <Router>
      <Sidebar>
        <div className='pages'>
        <Routes>
          
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/analytics' element={<Analytics/>}/>
              <Route path='/comment' element={<Comment/>}/>
              <Route path='/product' element={<Product/>}/>
              <Route path='/productList' element={<ProductList/>}/>
        </Routes>
        </div>
        </Sidebar> */}
{/* 
      </Router> */}
      
    </div>
  );
}

export default App;