import NavBar from './components/NavBar';
import Sliders from './components/Sliders';
import About from './components/About';
import Social from './components/Social';
import CV from './components/CV';
import UseStyles from './style';
const App = () => {
  const classes = UseStyles();
  return (
    <div className={classes.box}>
      <header>
        <NavBar />
      </header>
      <div className='hero'>
        <About />
        <div className='SliderContent'>
          <Sliders />
          <CV />
        </div>
        <Social />
      </div>
    </div>
  );
};

export default App;
