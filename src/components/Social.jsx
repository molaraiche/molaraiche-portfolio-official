import { useState, useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import UseStyles from '../style';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [msg, setMsg] = useState(false);
  console.log(`name ${name}`);
  console.log(`email ${email}`);
  console.log(`msg ${msg}`);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = UseStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'gmail',
      'template_2m9c2rr',
      form.current,
      'wSBTaHlmVvLcwkP0O'
    );

    form.current.reset();
  };
  const onNamechange = () => {
    setName(true);
  };
  const onEmailChange = () => {
    setEmail(true);
  };
  const onMsgChange = () => {
    setMsg(true);
  };
  const thanksMsg = () => {
    if (name && email && msg) {
      alert('msg sent');
      setName(false);
      setEmail(false);
      setMsg(false);
    } else {
      alert('msg not sent');
    }
  };
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
                <form ref={form} onSubmit={sendEmail}>
                  <div className='form-grp'>
                    <input
                      required
                      type='text'
                      name='full_name'
                      placeholder='Full Name'
                      id='name'
                      onChange={onNamechange}
                    />
                  </div>
                  <div className='form-grp'>
                    <input
                      required
                      type='email'
                      name='email'
                      placeholder='Email'
                      id='email'
                      onChange={onEmailChange}
                    />
                  </div>
                  <div className='form-grp'>
                    <textarea
                      required
                      name='message'
                      placeholder='Message'
                      id='msg'
                      cols='30'
                      rows='8'
                      onChange={onMsgChange}
                    ></textarea>
                  </div>
                  <div className='form-Btn'>
                    <input type='submit' onClick={thanksMsg} value='Send' />
                  </div>
                </form>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Social;
