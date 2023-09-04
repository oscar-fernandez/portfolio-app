import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/o-logo.png';
import './Home.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['s', 'c', 'a', 'r'];
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  });

  return (
    <div className="container home-page">
      <div className="text-zone">
        <span className="tag tag-top">&lt;h1&gt;</span>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={Logo} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={15}
          />
        </h1>
        <span className="tag tag-bottom">&lt;/h1&gt;</span>
        <h2>Fullstack Developer / IT Professional</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
