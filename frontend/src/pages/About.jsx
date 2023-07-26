//is all create by me not in the youtube video
import React from "react";
import '../styles/about.css';
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle.jsx";
import worldImg from '../assets/images/world.png'

const About = () =>{
    return <>
        <section>
            <Container>
                <Row>
                    <Col lg ='6'>
                    <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know before You go'}/>
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>It is About Page <span className="highlight"> Memories </span></h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis delectus hic placeat incidunt perferendis magnam tenetur necessitatibus quo maxime sint blanditiis modi provident alias omnis, ducimus soluta voluptates nemo sit illum fugiat optio. Expedita, blanditiis?
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
}



export default About