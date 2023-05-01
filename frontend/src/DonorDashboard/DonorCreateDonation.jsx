import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import "./donationForm.css";
import donationImage from '../assets/DonorImages/create-donation.jpg'
import './DonorCreateDonation.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DonorCreateDonation = () => {
    const [donationRecipient, setDonationRecipient] = useState("");
    const [donationType, setDonationType] = useState("");
    const [foodType, setFoodType] = useState("");
    const [foodQuantity, setFoodQuantity] = useState("");
    const [clothingType, setClothingType] = useState("");
    const [clothingCondition, setClothingCondition] = useState("");
    const [donationAmount, setDonationAmount] = useState("");
    const [clothesQuantity, setClothesQuantity] = useState("")
    const [needyName, setNeedyName] = useState("");
    const [needyEmail, setNeedyEmail] = useState("");
    const [formData, setFormData] = useState({})
    const { credentials } = useContext(AuthContext)

    const handleClothesQuantityChange = (e) =>{
        setClothesQuantity(e.target.value)
    }
    const handleDonationRecipientChange = (event) => {
        setDonationRecipient(event.target.value);
    }; 

    function handleDonationTypeChange(event) {
      setDonationType(event.target.value);
    }
  
    function handleFoodTypeChange(event) {
      setFoodType(event.target.value);
    }
  
    function handleFoodQuantityChange(event) {
      setFoodQuantity(event.target.value);
    }
  
    function handleClothingTypeChange(event) {
      setClothingType(event.target.value);
    }
  
    function handleClothingConditionChange(event) {
      setClothingCondition(event.target.value);
    }
    const handleDonationAmountChange = (event) => {
        setDonationAmount(event.target.value);
      };

    
      const handleNeedyNameChange = (event) => {
        setNeedyName(event.target.value);
      };
    
      const handleNeedyEmailChange = (event) => {
        setNeedyEmail(event.target.value);
      };

    const handleSubmit = async (event) => {
      event.preventDefault();
      
      if(donationRecipient=='NGO' && donationType=='food'){
       setFormData( {
            donor_name: credentials?.user?.name,
            donor_email: credentials?.user?.email,
            recipient_type:donationRecipient,
            donation_type:donationType,
            food_quantity:foodQuantity,
        })
      }
      else if(donationRecipient=='Needy-Person' && donationType=='food'){
        setFormData( {
            donor_name: credentials?.user?.name,
            donor_email: credentials?.user?.email,
            recipient_type:donationRecipient,
            recipient_name:needyName,
            recipient_email:needyEmail,
            donation_type:donationType,
            food_quantity:foodQuantity,
        })  
      }
      const response = await fetch('/create-donation',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      if(response.ok){
        alert("Donation Created and sent")
      }else{
        alert("Donation Failed")
      }

    }


  return (
    <Container>
        <Row className="justify-content-center">
            <Col sm={6}>
            <div className="donor-create-donation">
                
            <form onSubmit={handleSubmit}>
            <h2>Create Donation</h2>

            <div className="form-group">
                <label htmlFor="donationRecipient">Donation Recipient:</label>
                <select
                id="donationRecipient"
                value={donationRecipient}
                onChange={handleDonationRecipientChange}
                required
                >
                <option value="">Select recipient</option>
                <option value="NGO">NGO</option>
                <option value="Needy-Person">Needy Person</option>
                </select>
            </div>
            
                {donationRecipient === "Needy-Person" && (
                    <div>
                        <div className="form-group">
                            <label htmlFor="recipientName">Person Name:</label>
                            <input
                                type="text"
                                id="needyName"
                                value={needyName}
                                placeholder="Needy Person Name"
                                onChange={handleNeedyNameChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="recipientEmail">Person Email:</label>
                            <input
                                type="email"
                                id="needyEmail"
                                value={needyEmail}
                                placeholder="Needy Person Email"
                                onChange={handleNeedyEmailChange}
                                required
                            />
                        </div>
                    </div>
                )}

            <div className="form-group">
            <label>
                Donation Type:
                <select value={donationType} onChange={handleDonationTypeChange}>
                    <option value="">Select one</option>
                    <option value="food">Food</option>
                    <option value="cloth">Clothing</option>
                    <option value="money">Money</option>
                </select>
                </label>
            </div>

            {donationType === "food" && (
                <div>
                <label>
                    Food Type:
                    <select value={foodType} onChange={handleFoodTypeChange}>
                    <option value="">Select one</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="fresh produce">Fresh Produce</option>
                    <option value="non-perishables">Non-Perishables</option>
                    </select>
                </label>
                <label>
                    Quantity:
                    <input
                    type="number"
                    value={foodQuantity}
                    onChange={handleFoodQuantityChange}
                    />
                </label>
                </div>
            )}
            {donationType === "cloth" && (
                <div>
                <label>
                    Clothing Type:
                    <select value={clothingType} onChange={handleClothingTypeChange}>
                    <option value="">Select one</option>
                    <option value="shalwar-kameez">Shalwar Kameez</option>
                    <option value="shirts">Shirts</option>
                    <option value="pants">Pants</option>
                    <option value="jackets">Jackets</option>
                    </select>
                </label>
                <label>
                    Condition:
                    <select value={clothingCondition} onChange={handleClothingConditionChange}>
                        <option value='new'>New</option>
                        <option value='gently-used'>Gently Used</option>
                        <option value='heavily-used'>Heavily Used</option>
                    </select>
                </label>
                <label>
                    Quantity:
                    <input
                    type="number"
                    value={clothesQuantity}
                    onChange={handleClothesQuantityChange}
                    />
                </label>
                </div>
            )}

            {donationType === "money" && (
                <div className="form-group">
                <label htmlFor="donationAmount">Amount:</label>
                <input
                    type="number"
                    id="donationAmount"
                    value={donationAmount}
                    onChange={handleDonationAmountChange}
                    required
                />
                </div>
            )}

            <button type="submit">Donate</button>
            </form>
            </div>
            </Col>
            <Col sm={6} className="">
                <div className="donor-create-donation-image">
                        <img src={donationImage} alt="Donation_Image" width={500} height={500}/>
                    </div>  
            </Col>
        </Row>
    </Container>
  );
};

export default DonorCreateDonation;
