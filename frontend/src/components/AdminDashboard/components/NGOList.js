import React, { useState, useEffect } from 'react';
import './NGOList.css'
const NGOList = () => {
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


  const renderTableHeader = () => {
    let header = ["name","email","contact","website","address"]
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderTableData = () => {
    return ngos.map((ngo, index) => {
      const {_id, name, email, phone,websiteUrl ,address } = ngo //destructuring
      return (
        <tr key={_id}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{websiteUrl}</td>
          <td>{address}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <h1 id='title'>Registered NGOs</h1>
      <table id='ngos'>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
};

export default NGOList;
