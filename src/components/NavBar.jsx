import Brightness4Icon from '@mui/icons-material/Brightness4';
import UseStyles from '../style';
const NavBar = ({ modeHandler }) => {
  const classes = UseStyles();
  return (
    <div className='container'>
      <header className={classes.NavBar}>
        <h1>molaraiche</h1>
        <Brightness4Icon
          onClick={modeHandler}
          className={classes.darkModeBtn}
        />
      </header>
    </div>
  );
};

export default NavBar;
