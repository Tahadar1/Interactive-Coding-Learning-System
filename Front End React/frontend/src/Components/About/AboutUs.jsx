import React from 'react'
import './about.css'
import { Container, Row, Col } from 'reactstrap'
import aboutImg from '../../assests/images/about-us.png'
import CountUp from 'react-countup'
import './about.css'

const AboutUS = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="about__img">
                        <img src={aboutImg} alt="" className=' w-100'/>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="about__content">
                        <h2>About Us</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit dignissimos mollitia provident dolore ullam quo, officia distinctio ratione incidunt? Ducimus nulla, sed cupiditate reiciendis doloremque nesciunt! Hic vel pariatur laudantium.</p>

                        <div className="about__counter">
                            <div className='d-flex gap-5 align-items-center'>
                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp start={0} end={25} duration={2} suffix='K' />
                                    </span>
                                    <p className='counter__title'>Completed Projects</p>
                                </div>
                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp start={0} end={12} duration={2} suffix='M' />
                                    </span>
                                    <p className='counter__title'>Student Around World</p>
                                </div>
                            </div>
                            <div className='d-flex gap-5 align-items-center'>
                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp start={0} end={25} duration={2} suffix='K' />
                                    </span>
                                    <p className='counter__title'>Completed Projects</p>
                                </div>
                                <div className="single__counter">
                                    <span className="counter">
                                        <CountUp start={0} end={12} duration={2} suffix='M' />
                                    </span>
                                    <p className='counter__title'>Student Around World</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default AboutUS