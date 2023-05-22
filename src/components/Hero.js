import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
// import circleVector1 from '../assets/img/circleVector1.svg';
// import circleVector2 from '../assets/img/circleVector2.svg';
// import circleVector3 from '../assets/img/circleVector3.svg';
import 'animate.css';



export default function Hero () {

  const textRotate = ['Junior Developer', 'Web Designer', 'Cat Fanatic'];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase(prevPhrase =>
        (prevPhrase + 1) % textRotate.length
      );
    }, 5000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, );

  return (
    <section className='hero' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col className='hero-content' xs={12} md={6} xl={7}>
          <span className='tagline'>Welcome to my Portfolio</span>
          <h1 className='name'>Ben Hensor</h1>
          <div className='text-phrases'>
              {textRotate.map((phrase, index) => (
                <h1
                  key={index}
                  className={`text-phrase ${
                    index === currentPhrase ? 'fadeIn' : 'fadeOut'
                  }`}
                >
                  {phrase}
                </h1>
              ))}
            </div>
          <p>Lorem ipsum dummy text</p>
          <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <div className='hero-animation-container'>
            {/* <img className='circleVector1' src={circleVector1} alt='circle vector' />
            <img className='circleVector2' src={circleVector2} alt='circle vector' />
            <img className='circleVector3' src={circleVector3} alt='circle vector' /> */}
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}