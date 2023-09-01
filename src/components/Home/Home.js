import { Link } from 'react-router-dom';
import Logo from '../../assets/images/o-logo.png';
import './Home.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <span className="tag tag-top">&lt;h1&gt;</span>
        <h1>
          Hi, <br /> I'm
          <img src={Logo} alt="developer" />
          scar
          <br />
          Web Developer
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
