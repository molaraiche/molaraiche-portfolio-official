import { useState } from 'react';
import Modal from 'g@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  width: '80%',
  height: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};
const About = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>
        <InfoIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            About
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Hi there ! Im Mohamed From Morocco from a small town called
            CHICHAOUA, im a front end developer i start in 2021 until this
            moment studying and know new things, i start with HTML, CSS in the
            first month and i practice lot lot i work just with HTML CSS than i
            move to JavaScript, i start diving in React JS in the start of 2022,
            and here i am today working on making my roadmap done which is be a
            MERN stack developer, i study web dev from udemy courses, youtube,
            freeCodeCamp and still studying and learning more and more
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default About;
