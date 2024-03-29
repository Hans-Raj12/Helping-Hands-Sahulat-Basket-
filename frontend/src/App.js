import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext';
import Home2 from "./pages/Home2";
import Login from './pages/Login'
import Signup from './pages/Signup'
import DonorSignup from './components/DonorSignup'
import NeedySignup from './components/NeedySignup'
import NGOSignup from './components/NGOSignup';
// import Header from './components/Header'

//Admin Dashboard
import Dashboard from './components/AdminDashboard/Dashboard';
import ViewNGOs from './components/AdminDashboard/ViewNGOs';
import ViewDonors from './components/AdminDashboard/ViewDonors';
import ViewNeedy from './components/AdminDashboard/ViewNeedy';
import AddRemoveNGOs from './components/AdminDashboard/AddRemoveNGOs'
import AddRemoveDonors from './components/AdminDashboard/AddRemoveDonors'
import Sidebar from './components/AdminDashboard/Sidebar';
import Settings from './components/AdminDashboard/Settings'
import Feedbacks from './components/AdminDashboard/Feedbacks';

import NGOSidebar from './NGODashboard/NGOSidebar'
import NGODashboard from './NGODashboard/NGODashboard';
import CreatePost from './NGODashboard/CreatePost/FundRaisingPost'
import DonorsProfile from './NGODashboard/DonorProfile/DonorsProfile'
import UpdateDonation from './NGODashboard/UpdateDonationHistory/UpdateDonation'
import NGOProfile from './NGODashboard/Profile/NGOProfile'
import NGODonations from './NGODashboard/NGODonations'

import DonorSidebar from './DonorDashboard/DonorSidebar';
import DonorDashboard from './DonorDashboard/DonorDashboard'
import DonorCreateDonation from './DonorDashboard/DonorCreateDonation'
import DonorViewNGO from './DonorDashboard/DonorViewNGO'
import DonorProjects from './DonorDashboard/DonorProjects';
import DonorProfile from './DonorDashboard/DonorProfile';
import DonorDonationHistory from './DonorDashboard/DonorDonationHistory.jsx'

import NeedyProfile from './NeedyDashboard/NeedyProfile';
import NeedyDonation from './NeedyDashboard/NeedyDonation'
import NeedySidebar from './NeedyDashboard/NeedySidebar';
import NeedyDashboard from './NeedyDashboard/NeedyDashboard'
import NeedyDonationHistory from './NeedyDashboard/NeedyDonationHistory'

import NGOShowProjects from './NGODashboard/NGOShowProjects';
import DonorViewNeedy from './DonorDashboard/DonorViewNeedy';
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
                    <Route path='view-ngos' element={<ViewNGOs/>}/>
                    <Route path='view-donors' element={<ViewDonors/>}/>
                    <Route path='view-needy' element={<ViewNeedy/>}/>
                    <Route path='add-remove-ngos' element={<AddRemoveNGOs/>}/>
                    <Route path='add-remove-donors' element={<AddRemoveDonors/>}/>
                    <Route path='feedbacks' element={<Feedbacks/>}/>  
                    <Route path='settings' element={<Settings/>}/>
                </Route>
          </Routes>
       
          <Routes>
                <Route path='/ngo' element={<NGOSidebar/>}>
                    <Route path='' element={<NGODashboard/>}/>
                    <Route path='create-post' element={<CreatePost/>}/>
                    <Route path='donor-profiles' element={<DonorsProfile/>}/>
                    <Route path='donation-history' element={<UpdateDonation/>}/>
                    <Route path='ngo-profile' element={<NGOProfile/>}/>
                    <Route path='ngo-donations' element={<NGODonations/>}/>
                    <Route path='show-projects' element={<NGOShowProjects/>}/>
                </Route>
          </Routes>

          <Routes>
                <Route path='/donor' element={<DonorSidebar/>}>
                     <Route path='' element={<DonorDashboard/>}/>
                    <Route path='create-donation' element={<DonorCreateDonation/>}/>
                    <Route path='view-ngos' element={<DonorViewNGO/>}/>
                    <Route path='view-needy' element={<DonorViewNeedy/>}/>
                    <Route path='donor-projects' element={<DonorProjects/>}/>
                    <Route path='donor-donations-history' element={<DonorDonationHistory/>}/>
                    <Route path='profile' element={<DonorProfile/>}/>
                </Route>
          </Routes>
          <Routes>
                <Route path='/needy' element={<NeedySidebar/>}>
                      <Route path='' element={<NeedyDashboard/>}/>
                     <Route path='needyProfile' element={<NeedyProfile/>}/>
                     <Route path='needyDonation' element={<NeedyDonation/>}/>
                      <Route path='needy-donation-history' element={<NeedyDonationHistory/>}/>
                </Route>
                
          </Routes>
          
          </AuthProvider>
          
        </Router>

    </>
   
  );
}

export default App;