import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home2 from "./pages/Home2";
import Login from './pages/Login'
import Header from './components/Header';
import Footer2 from './components/Footer2'
import Signup from './pages/Signup'
import DonorSignup from './components/DonorSignup'
import NeedySignup from './components/NeedySignup'

import VerifyNGO from './components/AdminDashboard/VerifyNGO';
import Dashboard from './components/AdminDashboard/Dashboard';
import ViewNGOs from './components/AdminDashboard/ViewNGOs';
import ViewDonors from './components/AdminDashboard/ViewDonors';
import AddRemoveNGOs from './components/AdminDashboard/AddRemoveNGOs'
import AddRemoveDonors from './components/AdminDashboard/AddRemoveDonors'
import Sidebar from './components/AdminDashboard/Sidebar';
import Settings from './components/AdminDashboard/Settings'

function App() {

  return (
    
    <>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home2/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/donor-signup' element={<DonorSignup/>}/>
            <Route path='/needy-signup' element={<NeedySignup/>}/>
          </Routes>
          <Footer2/> 
        </Router>
    
        <Router>
          <Routes>
                  <Route path='/sidebar' element={<Sidebar/>}>
                  <Route path='' element={<Dashboard/>}/>
                  <Route path='verify-ngo' element={<VerifyNGO/>}/>
                  <Route path='view-ngos' element={<ViewNGOs/>}/>
                  <Route path='view-donors' element={<ViewDonors/>}/>
                  <Route path='add-remove-ngos' element={<AddRemoveNGOs/>}/>
                  <Route path='add-remove-donors' element={<AddRemoveDonors/>}/>
                  <Route path='settings' element={<Settings/>}/>
                </Route>
          </Routes>
        </Router>

    </>
   
  );
}

export default App;