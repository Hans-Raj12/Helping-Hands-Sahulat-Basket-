import React, {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import './NGOProfile.css';
import profileImage from '../../assets/DonorImages/person.jpg';

const NGOProfile = () => {
    const { credentials } = useContext(AuthContext)
  return (
    <div className="donor-profile-container">
      <div className="donor-profile-header">
        <img src={profileImage} alt="Profile" />
        <br/>
        <h2>{credentials?.user?.name}</h2>
      </div>
      <div className="donor-profile-details">
        <div className="donor-profile-row">
          <h4>Email:</h4>
          <p>{credentials?.user?.email}</p>
        </div>
        <div className="donor-profile-row">
          <h4>Phone:</h4>
          <p>{credentials?.user?.phone}</p>
        </div>
        <div className="donor-profile-row">
          <h4>Type of NGO:</h4>
          <p>{credentials?.user?.NGOType}</p>
        </div>
        <div className="donor-profile-row">
          <h4>Address:  </h4>
          <p>{credentials?.user?.address}</p>
        </div>
        <div className="donor-profile-row">
          <h4>Website:  </h4>
          <p>{credentials?.user?.websiteUrl}</p>
        </div>
        
      </div>
    </div>
  );
};

export default NGOProfile;
