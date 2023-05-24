import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import ChooseImg from "../../assests/images/why-choose-us.png";
import "./chooseus.css";
import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="choose__content">
              <h2>Why Choose Us?</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                ducimus deleniti minus necessitatibus reprehenderit tenetur
                atque odio tempore natus placeat debitis, dolorum, consectetur
                laborum eius? Accusantium nobis dolorum ex velit. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Libero eaque quas,
                vero, omnis debitis delectus quae consectetur iste laudantium
                repellendus consequuntur ab unde aliquid laboriosam odit rerum
                perspiciatis enim qui?
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="C:/Users/Taha Rasool/ScreenRecording.mp4"
                  controls
                  width="100%"
                  height="300px"
                />
              ) : (
                <img src={ChooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
