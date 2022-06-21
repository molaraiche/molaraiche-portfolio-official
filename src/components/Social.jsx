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
        <a
          href='https://github.com/molaraiche'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <GitHubIcon />
        </a>
        <a
          href='https://twitter.com/molaraiche'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <TwitterIcon />
        </a>
        <a href='.' target='_blank' rel='noreferrer' className='icon'>
          <MailIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/molaraiche/'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default Social;
