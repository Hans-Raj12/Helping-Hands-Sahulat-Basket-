import NeedyProfile from "./NeedyProfile"
import NeedyDonation from './NeedyDonation'
import needy from "../assets/NeedyImages/needyProfile.jpg"
import './NeedyDashboard.css'
const NeedyDashboard = () => {

    return(
        <div className="needy-dashboard-container">
            <h1>Needy Profile</h1>
            <div className="needy-profile">
                
                <NeedyProfile/>
                <img src={needy} width={500} height={500}/>
            </div>
            <NeedyDonation/>
        </div>
    )
}
export default NeedyDashboard