import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import CardImage from '../../assets/fundraisingPostImages/charity.png'

import './FundraisingPostCard.css'
// import { type } from 'os';

export default function FundraisingPostCard(props) {

  const [open, setOpen] = React.useState(false);
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

  return (
    <div className='fundraising-post-card'>
    <Card sx={{ maxWidth: 345 }} className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={CardImage}
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
        <Button size="small" color="primary">
          Donate
        </Button>
        <Button onClick={handleOpen}>view details</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
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
                <h4>Created by: </h4> {props.user?.name}
              </Typography>
            </Box>
          </Modal>
      </CardActions>
    </Card>
    </div>
  );
}