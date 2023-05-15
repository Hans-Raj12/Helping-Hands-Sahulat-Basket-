import React, { useState,useEffect } from 'react';
import './DonorList.css'
const DonorList = () => {
  const [donors, setDonors] = useState([]);

  useEffect(()=>{
  
    fetch(`/donors`,{
        method:"GET"
    })
    .then(response => response.json())
    .then(data => {
      
      setDonors(data)
      
    })
    .catch(error => console.error(error));
  })

  const renderTableHeader = () => {
    // let header = Object.keys(donors[0])
    let header = ["name","email","cnic","contact","address"]
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderTableData = () => {
    return donors.map((donor, index) => {
      const { _id, name, email, cnic, phone, address } = donor //destructuring
      return (
        <tr key={_id}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{cnic}</td>
          <td>{phone}</td>
          <td>{address}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <h1 id='title'>Registered Donors</h1>
      <table id='donors'>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
};

export default DonorList;
