import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../assests/images/hero-img1.png'
import './herosection.css'

const HeroSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero__content">
                        <h2 className='mb-4'>Anytime Anywhere <br /> Learn on your <br/> Suitable Sechdule <br/> </h2>
                        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur <br />adipisicing elit. Reiciendis asperiores voluptate <br/> quae quod accusamus provident omnis, quia <br/> recusandae id enim, expedita dicta nulla voluptates <br/> voluptas consequuntur veniam fugiat necessitatibus ullam!</p>
                        <div className="search">
                            <input type="text" placeholder="Search" />
                            <button className="btn">Search</button>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <img src={heroImg} alt="" className='w-100'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection