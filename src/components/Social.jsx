import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import UseStyles from '../style';
const Social = () => {
  const classes = UseStyles();

  return (
    <div>
      <div className={classes.iconsHolder}>
        <a href='.' className='icon'>
          <GitHubIcon />
        </a>
        <a href='.' className='icon'>
          <TwitterIcon />
        </a>
        <a href='.' className='icon'>
          <MailIcon />
        </a>
        <a href='.' className='icon'>
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default Social;
