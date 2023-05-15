import React, { useState, useEffect } from 'react';
import './NeedyList.css'
const NeedyList = () => {
  const [needy, setNeedy] = useState([]);
  useEffect(()=>{
  
    fetch(`/needy`,{
        method:"GET"
    })
    .then(response => response.json())
    .then(data => {
      
      setNeedy(data)
    })
    .catch(error => console.error(error));
  })

  const renderTableHeader = () => {
    // let header = Object.keys(needy[0])
    let header = ["name","email","cnic","contact","address"]
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderTableData = () => {
    return needy.map((donor, index) => {
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
      <h1 id='title'>Registered Needy</h1>
      <table id='needy'>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
};
export default NeedyList;
