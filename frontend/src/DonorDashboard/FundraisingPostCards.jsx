import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
 import DonateModalImage from '../assets/DonorImages/donate-modal-image.jpg'

import './FundraisingPostCards.css'
// import { type } from 'os';

export default function FundraisingPostCards(props) {

  const [open, setOpen] = React.useState(false);
  const [donateBtnOpen, setDonateBtnOpen] = React.useState(false)
  const [donationAmount, setDonationAmount] = React.useState()
  const [error, setError] = React.useState(false)
  const [post, setPost] = React.useState(props.post)
  // const toGo = props.post.goalAmount-props.post.raisedAmount
  // console.log(toGo)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => {
     setOpen(true) 
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleDonateBtnOpen = () => {
    setDonateBtnOpen(true) 
 }
 const handleDonateBtnClose = () => {
   setDonateBtnOpen(false)
 }
 const handleDonateBtn=()=>{
   // Calculate the new raised amount by adding the donation amount
   const newRaisedAmount = props.post.raisedAmount
   ? props.post.raisedAmount + +donationAmount
   : +donationAmount;

 // Prepare the data to send in the PATCH request
 const data = {
   raisedAmount: newRaisedAmount,
 };

 // Make the PATCH request
 fetch(`/fundraising-posts/donate/${props.post._id}`, {
   method: 'PATCH',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(data),
 })
   .then((response) => response.json())
   .then((updatedPost) => {
     // Handle the response from the server if needed
     props.post.raisedAmount = Number(updatedPost.raisedAmount);
     console.log('Updated post:', updatedPost);
     setDonationAmount(0)
   })
   .catch((error) => {
     // Handle any errors that occur during the request
     console.error('Error updating post:', error);
   });

   handleDonateBtnClose()
 }


  return (
    <div className='fundraising-post-card'>
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={`http://localhost:5000/public/${props.post.imageFilePath}`}
          alt="fundraising post image"
          className='card-image'
        />
        <CardContent>
        
          <Typography gutterBottom variant="h5" component="div" className='card-setting'>
            {props.post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className='card-setting'>
            {props.post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleDonateBtnOpen}>
          Donate
        </Button>
        <Dialog open={donateBtnOpen} onClose={handleDonateBtnClose}>
        <DialogTitle>Donate</DialogTitle>
        <DialogContent>
        <DialogContentText>
            Please enter the amount of donation to Donate for this noble cause.
          </DialogContentText>
          
                    <Typography id="modal-modal-goalAmount" sx={{ mt: 2 }} style={{textAlign:'left'}}>
                      <p>
                        Goal Amount: {props.post?.goalAmount} 
                        <br/>
                        Amount Raised: {props.post.raisedAmount ? props.post.raisedAmount : 0}
                      </p> 
                    </Typography>
          <TextField
            error={error}
            autoFocus
            margin="dense"
            id="standard-error-helper-text"
            label="Amount"
            helperText="You can not donate more than the required amount"
            type="number"
            fullWidth
            variant="standard"
            value={donationAmount}
            onChange={(e)=>setDonationAmount(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDonateBtnClose}>Cancel</Button>
          <Button onClick={handleDonateBtn}>Donate</Button>
        </DialogActions>
      </Dialog>


        <Button onClick={handleOpen}>view details</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className='modal-container'>
                <div className='modal-image'>
                <CardMedia
                    component="img"
                    height="200"
                    image={`http://localhost:5000/public/${props.post.imageFilePath}`}
                    alt="fundraising post image"
                    className='card-image'
                />
                </div>
                <div className='modal-content'>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'left'}}>
                      <h4 >Title: </h4>{props.post.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign:'left'}}>
                      <h4 >Description: </h4>{props.post.description}
                    </Typography>
                    <Typography id="modal-modal-goalAmount" sx={{ mt: 2 }} style={{textAlign:'left'}}>
                      <p>
                        Goal Amount: {props.post?.goalAmount} 
                        <br/>
                        Amount Raised: {props.post.raisedAmount ? props.post.raisedAmount : 0}
                      </p> 
                    </Typography>
                    <Typography id="modal-modal-createdBy" sx={{ mt: 2 }} style={{textAlign:'left'}}>
                      <h4>Created by: </h4> {props.post?.ngoEmail}
                    </Typography>
                </div>
              </div>
              
            </Box>
          </Modal>
      </CardActions>
    </Card>
    </div>
  );
}