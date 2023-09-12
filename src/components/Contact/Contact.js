import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'default_service',
        'template_ogletjz',
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message. Please try again!');
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  });

  return (
    <div className="container contact-page">
      <div className="text-zone">
        <span className="tag tag-top">&lt;h1&gt;</span>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
            idx={10}
          />
        </h1>
        <span className="tag tag-bottom">&lt;/h1&gt;</span>
        <p>
          I am interested in full time, part time and contract positions. If you
          have other requests or questions, please don't hesitate to contact me
          using the form below!
        </p>
        <div className="contact-form">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="input-group">
              <input type="text" name="from_name" placeholder="Name" required />
              <input
                type="email"
                name="email_id"
                placeholder="Email"
                required
              />
            </div>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <input type="submit" className="flat-button" value="SEND" />
          </form>
        </div>
      </div>
      <div className="map-wrap">
        <div className="info-map">
          Oscar Fernandez
          <br />
          Charlotte, NC
          <br />
          <span>ofernan90@gmail.com</span>
        </div>
        <MapContainer center={[35.2238589, -80.8017877]} zoom={12}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[35.2238589, -80.8017877]}>
            <Popup>I live somewhere around here</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
