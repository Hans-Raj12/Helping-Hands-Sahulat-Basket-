import React, { useState,useEffect } from 'react';
import './FeedbacksList.css'
const FeedbacksList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(()=>{
  
    fetch(`/feedback`,{
        method:"GET"
    })
    .then(response => response.json())
    .then(data => {
      
      setFeedbacks(data.feedbacks)
      
    })
    .catch(error => console.error(error));
  })

  const renderTableHeader = () => {
    // let header = Object.keys(donors[0])
    let header = ["name","email","Subject","Message","Status"]
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderTableData = () => {
    return feedbacks.map((feedbacks, index) => {
      const { _id, name, email, subject, message, active } = feedbacks //destructuring
      return (
        <tr key={_id}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{subject}</td>
          <td>{message}</td>
          <td>{active?'active':'resolved'}</td>
        </tr>
      )
    })
  }

  return (
    <div>
      <h1 id='title'>Feedbacks</h1>
      <table id='feedbacks'>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  )
};

export default FeedbacksList;
