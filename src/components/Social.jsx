import React, { useRef } from 'react';
import * as React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import UseStyles from '../style';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Social = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = UseStyles();

  return (
    <div>
      <div className={classes.iconsHolder}>
        <Button
          href='https://github.com/molaraiche'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <GitHubIcon />
        </Button>
        <Button
          href='https://twitter.com/molaraiche'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <TwitterIcon />
        </Button>
        <Button className='icon' onClick={handleOpen}>
          {' '}
          <MailIcon />
        </Button>
        <Button
          href='https://www.linkedin.com/in/molaraiche/'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <LinkedInIcon />
        </Button>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Contact Me
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              <div className='inputField'>
                <TextField style={{ margin: '5px' }} label='Name' />
                <TextField style={{ margin: '5px' }} label='Email' />
                <TextField style={{ margin: '5px' }} label='Message' />
                <TextField
                  style={{ margin: '10px' }}
                  type='submit'
                  value='Send'
                />
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Social;
