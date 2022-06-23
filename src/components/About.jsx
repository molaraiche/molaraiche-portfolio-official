import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import UseStyles from '../style';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  width: '80%',
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 0,
  p: 4,
  borderRadius: '8px',
  fontFamily: 'Fira Sans',
  fontStyle: 'italic',
};
const About = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = UseStyles();
  return (
    <div className={classes.about}>
      <Button onClick={handleOpen} className='aboutIcon'>
        <InfoIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='closeModal'>
            <Button onClick={handleClose}>X</Button>
          </div>
          <Typography
            style={{ padding: '0px 20px' }}
            id='modal-modal-title'
            variant='h6'
            component='h2'
          >
            About
          </Typography>
          <Typography
            style={{
              textAlign: 'justify',
              padding: '0px 20px',
              lineHeight: '1,8rem',
            }}
            id='modal-modal-description'
            sx={{ mt: 2 }}
          >
            Hi there ! I'm Mohamed From Morocco from a small town called
            CHICHAOUA, I' m a front end developer i started in 2021 until this
            moment studying and learning new things, i started with HTML, CSS in
            the first month and I practiced a lot I used vanilla HTML CSS then I
            moved to JavaScript, I started diving in ReactJS at the start of
            2022, and here i am today grinding my roadmap which is be a MERN
            stack developer, i study web dev from udemy courses, youtube,
            freeCodeCamp and still studying and learning more and more .
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default About;
