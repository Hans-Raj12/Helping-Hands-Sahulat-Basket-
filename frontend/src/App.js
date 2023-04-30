import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import Home2 from "./pages/Home2";
import Login from './pages/Login'
import Footer2 from './components/Footer2'
import Signup from './pages/Signup'
import DonorSignup from './components/DonorSignup'
import NeedySignup from './components/NeedySignup'
import NGOSignup from './components/NGOSignup';
import Header from './components/Header'

import VerifyNGO from './components/AdminDashboard/VerifyNGO';
import Dashboard from './components/AdminDashboard/Dashboard';
import ViewNGOs from './components/AdminDashboard/ViewNGOs';
import ViewDonors from './components/AdminDashboard/ViewDonors';
import AddRemoveNGOs from './components/AdminDashboard/AddRemoveNGOs'
import AddRemoveDonors from './components/AdminDashboard/AddRemoveDonors'
import Sidebar from './components/AdminDashboard/Sidebar';
import Settings from './components/AdminDashboard/Settings'

import NGOSidebar from './NGODashboard/NGOSidebar'
import NGODashboard from './NGODashboard/NGODashboard';
import CreatePost from './NGODashboard/CreatePost/CreatePost'
// import DonorProfile from './NGODashboard/DonorProfile/DonorProfile'
import UpdateDonation from './NGODashboard/UpdateDonationHistory/UpdateDonation'
import Profile from './NGODashboard/Profile/Profile'

import DonorSidebar from './DonorDashboard/DonorSidebar';
import DonorDashboard from './DonorDashboard/DonorDashboard'
import DonorCreateDonation from './DonorDashboard/DonorCreateDonation'
import DonorViewNGO from './DonorDashboard/DonorViewNGO'
import DonorProjects from './DonorDashboard/DonorProjects';
import DonorProfile from './DonorDashboard/DonorProfile';

function App() {

  return (
    
    <>
      <Router>
      <AuthProvider>
          <Routes>
            <Route path='/' element={<Home2/>}/>
            
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/donor-signup' element={<DonorSignup/>}/>
            <Route path='/needy-signup' element={<NeedySignup/>}/>
            <Route path='/ngo-signup' element={<NGOSignup/>}/>
          </Routes>
    
         
        
    
          <Routes>
                  <Route path='/admin' element={<Sidebar/>}>
                    <Route path='' element={<Dashboard/>}/>
                    <Route path='verify-ngo' element={<VerifyNGO/>}/>
                    <Route path='view-ngos' element={<ViewNGOs/>}/>
                    <Route path='view-donors' element={<ViewDonors/>}/>
                    <Route path='add-remove-ngos' element={<AddRemoveNGOs/>}/>
                    <Route path='add-remove-donors' element={<AddRemoveDonors/>}/>
                    <Route path='settings' element={<Settings/>}/>
                </Route>
          </Routes>
       
          <Routes>
                <Route path='/ngo' element={<NGOSidebar/>}>
                    <Route path='' element={<NGODashboard/>}/>
                    <Route path='create-post' element={<CreatePost/>}/>
                    {/* <Route path='donor-profiles' element={<DonorProfile/>}/> */}
                    <Route path='donation-history' element={<UpdateDonation/>}/>
                    <Route path='profile' element={<Profile/>}/>
                </Route>
          </Routes>

          <Routes>
                <Route path='/donor' element={<DonorSidebar/>}>
                     <Route path='' element={<DonorDashboard/>}/>
                    <Route path='create-donation' element={<DonorCreateDonation/>}/>
                    <Route path='view-ngos' element={<DonorViewNGO/>}/>
                    <Route path='donor-projects' element={<DonorProjects/>}/>
                    <Route path='profile' element={<DonorProfile/>}/>
                </Route>
          </Routes>
          <Footer2/> 
          </AuthProvider>
        </Router>

    </>
   
  );
}

export default App;