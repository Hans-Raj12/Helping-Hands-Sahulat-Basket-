import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';
import './NeedyProfile.css';
import profileImage from '../assets/DonorImages/person.jpg';

const NeedyProfile = () => {
    const { credentials } = useContext(AuthContext)
  return (
    <div className="needy-profile-container">
      <div className="needy-profile-header">
        <img src={profileImage} alt="Profile" />
        <br/>
        <h2>{credentials?.user ? credentials?.user?.name : "Name"}</h2>
      </div>
      <div className="needy-profile-details">
        <div className="needy-profile-row">
          <h4>Email:</h4>
          <p>{credentials?.user ? credentials?.user?.email : "email"}</p>
        </div>
        <div className="needy-profile-row">
          <h4>Phone:</h4>
          <p>{credentials?.user ? credentials?.user?.phone : 'phone'}</p>
        </div>
        <div className="needy-profile-row">
          <h4>CNIC :</h4>
          <p>{credentials?.user ? credentials?.user?.cnic:'1234566'}</p>
        </div>
        <div className="needy-profile-row">
          <h4>Address:  </h4>
          <p>{credentials?.user ? credentials?.user?.address : 'address'}</p>
        </div>
        
      </div>
    </div>
  );
};

export default NeedyProfile;
