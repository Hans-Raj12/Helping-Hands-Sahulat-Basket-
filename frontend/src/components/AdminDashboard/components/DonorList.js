import React, { useState } from 'react';
import './DonorList.css'
const DonorList = () => {
  const [donors, setDonors] = useState([
    {
        id:1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        cnic: '12345-6789012-3',
        phone: '0312-3456789',
        address: '123 Main St, Karachi',
      },
      {
        id:2,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        cnic: '23456-7890123-4',
        phone: '0321-9876543',
        address: '456 Market St, Lahore',
      },
      {
        id:3,
        name: 'Ahmed Khan',
        email: 'ahmedkhan@example.com',
        cnic: '34567-8901234-5',
        phone: '0333-4567890',
        address: '789 Park Road, Islamabad',
      },
      {
        id:4,
        name: 'Sana Malik',
        email: 'sanamalik@example.com',
        cnic: '45678-9012345-6',
        phone: '0345-6789012',
        address: '321 Hilltop Ave, Lahore',
      },
      {
        id:5,
        name: 'Ali Abbas',
        email: 'aliabbas@example.com',
        cnic: '56789-0123456-7',
        phone: '0300-1234567',
        address: '567 Pine St, Karachi',
      },
      {
        id:6,
        name: 'Fatima Hussain',
        email: 'fatimahussain@example.com',
        cnic: '67890-1234567-8',
        phone: '0333-9876543',
        address: '901 Oak St, Islamabad',
      },
  ]);

  const renderTableHeader = () => {
    let header = Object.keys(donors[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderTableData = () => {
    return donors.map((donor, index) => {
      const { id, name, email, cnic, phone, address } = donor //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
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
