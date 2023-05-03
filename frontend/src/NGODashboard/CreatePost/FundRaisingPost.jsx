import { useState, useContext } from 'react';
import {AuthContext} from '../../context/AuthContext'
import './FundRaisingPost.css'
function FundraisingPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goalAmount, setGoalAmount] = useState(0);
  const [file, setFile] = useState(null);

  const {credentials} = useContext(AuthContext)

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('goalAmount', goalAmount);
    formData.append('file', file);
    formData.append('ngoId', credentials?.user?._id);
    formData.append('ngoEmail', credentials?.user?.email);

    try {
      const response = await fetch('/fundraising-posts', {
        method: 'POST',
        body: formData,
      })
      await response.json()
      if(response.ok){
        alert("Post created")
      }
      else{
        alert('Failed')
      }

      setTitle('');
      setDescription('');
      setGoalAmount(0);
      setFile(null);
    } catch (error) {
      console.error(error);
    }
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    setFile(file);
  };

  return (
    <div className='fundraisingpost-form'>
        <form  onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="goalAmount">Goal Amount:</label>
        <input
          type="number"
          id="goalAmount"
          value={goalAmount}
          onChange={(event) => setGoalAmount(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="upload-image">Upload Image:</label>
        <input id='upload-image' type="file" onChange={handleFileChange} accept='.jpg, .jpeg, .png' />
      </div>
      <button type="submit">Create Fundraising Post</button>
    </form>
    </div>
  );
}

export default FundraisingPost
