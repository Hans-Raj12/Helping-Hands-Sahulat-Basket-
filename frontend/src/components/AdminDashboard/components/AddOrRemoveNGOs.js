import React, { useState, useEffect } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './NGOList.css'

const AddorRemoveNGOs = () => {
  const [ngos, setNgos] = useState([
    
  ]);
  useEffect(()=>{
  
    fetch(`/ngos`,{
        method:"GET"
    })
    .then(response => response.json())
    .then(data => {
      
      setNgos(data)
      
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
          setNgos(ngos.filter((ngo) => ngo.id !== id));
          alert('User Suspended successfully.');
        } else {
          // Handle error
          alert('Failed to suspend the user.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  const renderTableHeader = () => {
    let header =  ["name","email","contact","website","address"]
    header.push('REMOVE');
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  };

  const renderTableData = () => {
    return ngos.map((ngo, index) => {
      const {_id, name, email, phone,websiteUrl ,address} = ngo; //destructuring
      return (
        <tr key={_id}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{websiteUrl}</td>
          <td>{address}</td>
          <td>
            <button  className="suspend-btn"onClick={() => handleDelete(_id)} >
              Suspend
            </button>
          </td>
        </tr>
      )
    })
  };

  return (
    <div>
      <h1 id='title'>Suspend NGOs</h1>
      <table id='ngos'>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
};

export default AddorRemoveNGOs;
