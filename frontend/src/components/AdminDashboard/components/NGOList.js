import React, { useState } from 'react';
import './NGOList.css'
const NGOList = () => {
  const [ngos, setNgos] = useState([
    {
        id:1,
        name: "Edhi Foundation",
        email: "info@edhi.org",
        contact: "111-111-134",
        address: "Edhi Village, Korangi Creek, Karachi",
      },
      {
        id:2,
        name: "Shaukat Khanum Memorial Cancer Hospital and Research Centre",
        email: "info@skm.org.pk",
        contact: "+92 42 35905000",
        address: "7A, Block R-3, Johar Town, Lahore",
      },
      {
        id:3,
        name: "The Citizens Foundation",
        email: "info@tcf.org.pk",
        contact: "+92 21 111 823 823",
        address: "Plot # 20, Sector 14, Near Brookes Chowrangi, Korangi Industrial Area, Karachi",
      },
      {
        id:4,
        name: "SOS Children's Villages",
        email: "info@sos.org.pk",
        contact: "+92 42 35830791",
        address: "Ferozpur Road, Lahore",
      },
      {
        id:5,
        name: "LRBT (Layton Rahmatulla Benevolent Trust)",
        email: "info@lrbt.org.pk",
        contact: "+92 21 111 587 587",
        address: "19, Ali Block, New Garden Town, Lahore",
      },
  ]);

  const renderTableHeader = () => {
    let header = Object.keys(ngos[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderTableData = () => {
    return ngos.map((ngo, index) => {
      const { id, name, email, contact, address } = ngo //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{contact}</td>
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
