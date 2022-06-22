import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Sliders from './components/Sliders';
import About from './components/About';
import Social from './components/Social';
import CV from './components/CV';
import UseStyles from './style';
const App = () => {
  const [mode, setMode] = useState('dark');
  const [datas, setData] = useState([]);
  const classes = UseStyles();
  const modeHandler = () => setMode(mode === 'dark' ? 'light' : 'dark');
  const fetchData = async () => {
    const response = await fetch('./db/data.json');
    const data = await response.json();
    return setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div id={mode} className={classes.box}>
      <header>
        <NavBar modeHandler={modeHandler} />
      </header>
      <div className='container'>
        <div className={classes.hero}>
          <div className='social-Content'>
            <Social />
          </div>
          <div className='projects'>
            <CV />
            <Sliders datas={datas} />
          </div>

          <div className='about-Content'>
            <About />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
