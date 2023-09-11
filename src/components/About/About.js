import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './About.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  });

  return (
    <div className="container about-page">
      <div className="text-zone">
        <span className="tag tag-top">&lt;h1&gt;</span>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <span className="tag tag-bottom">&lt;/h1&gt;</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tristique orci orci, a ornare turpis imperdiet nec. Nam tincidunt
          egestas nibh, a pulvinar enim bibendum et. Ut sit amet lacus lorem. Ut
          vestibulum metus vel sem tincidunt, non lobortis ligula posuere. In
          accumsan justo et rutrum commodo. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Duis id
          quam ac ex venenatis rhoncus. Mauris a egestas nunc, quis condimentum
          mi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tristique orci orci, a ornare turpis imperdiet nec. Nam tincidunt
          egestas nibh, a pulvinar enim bibendum et. Ut sit amet lacus lorem. Ut
          vestibulum metus vel sem tincidunt, non lobortis ligula posuere. In
          accumsan justo et rutrum commodo. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Duis id
          quam ac ex venenatis rhoncus. Mauris a egestas nunc, quis condimentum
          mi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          tristique orci orci, a ornare turpis imperdiet nec. Nam tincidunt
          egestas nibh, a pulvinar enim bibendum et. Ut sit amet lacus lorem. Ut
          vestibulum metus vel sem tincidunt, non lobortis ligula posuere. In
          accumsan justo et rutrum commodo.
        </p>
      </div>

      <div className="stage-cube-container">
        <div className="cube-spinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJava} color="#fb9b1c" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
