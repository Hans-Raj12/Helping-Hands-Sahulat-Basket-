// import NeedyProfile from "./NeedyProfile"
import NeedyDonation from './NeedyDonation'
// import needy from "../assets/NeedyImages/needyProfile.jpg"
import './NeedyDashboard.css'
import NeedyDonationHistory from './NeedyDonationHistory'
const NeedyDashboard = () => {

    return(
        <div className="needy-dashboard-container">
            <NeedyDonation/>
            <NeedyDonationHistory/>
        </div>
    )
}
export default NeedyDashboard