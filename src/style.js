import { makeStyles } from '@mui/styles';

const UseStyles = makeStyles({
  box: {
    backgroundColor: '#1b3b6f',
    color: '#e8ebf1',
    height: '100vh',
  },
  NavBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '10vh',
  },
  darkModeBtn: {
    cursor: 'pointer',
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '80vh',
  },

  iconsHolder: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    height: '200px',
    justifyContent: 'space-between',
    left: '50px',
  },
  picStyles: {
    maxWidth: '800px',
    width: '80%',
    height: 'auto',
  },
  about: {
    position: 'absolute',
    right: '12%',
    bottom: '10%',
  },
  CV: {
    position: 'absolute',
    top: '50%',
  },
});
export default UseStyles;

// Dark color #1B3B6F
//  light Color #E8EBF1
// Hover color #5F769A
