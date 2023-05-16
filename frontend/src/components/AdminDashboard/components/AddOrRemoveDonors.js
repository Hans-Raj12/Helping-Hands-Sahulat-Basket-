import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './DonorList.css'

const AddorRemoveDonors = () => {
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


  const handleDelete = (id) => {

    fetch(`/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ active: false }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
          setDonors(donors.filter((donor) => donor.id !== id));
          alert('User updated successfully.');
        } else {
          // Handle error
          console.error('Failed to update user.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const renderTableHeader = () => {
    let header = ["name","email","cnic","contact","address"]
    header.push('REMOVE');
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  };

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
          <td>
            <button className="suspend-btn" onClick={() => handleDelete(_id)} >
              Suspend
            </button>
          </td>
        </tr>
      )
    })
  };

  return (
    <div>
      <h1 id='title'>Suspend donors</h1>
      <table id='donors'>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
};

export default AddorRemoveDonors;
