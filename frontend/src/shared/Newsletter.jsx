import React from "react";
import './newsletter.css'

import { Container, Row, Col } from "reactstrap";
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
    <section className="newsletter">
        <Container>
            <Row>
                <Col lg = '6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful traviling information.</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder="Enter you email" />
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est in expedita, sunt assumenda perspiciatis recusandae?</p>
                    </div>
                </Col>
                <Col lg = '6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
};

export default Newsletter;