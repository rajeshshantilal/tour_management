import React from "react";
import '../styles/home.css'

import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'



import Subtitle from "../shared/Subtitle.jsx";
import SearchBar from "../shared/SearchBar.jsx";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
    return <>
    {/* ========================= hero section start ============================ */}
        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know before You go'}/>
                                <img src={worldImg} alt="" />
                            </div>
                            <h1>Traveling opens the door to create <span className="highlight"> Memories </span></h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis delectus hic placeat incidunt perferendis magnam tenetur necessitatibus quo maxime sint blanditiis modi provident alias omnis, ducimus soluta voluptates nemo sit illum fugiat optio. Expedita, blanditiis?
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__image-box">
                            <img src={heroImg} alt="" srcset="" />
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__image-box mt-4 hero__video-box mt-4">
                            <video src={heroVideo} alt="" controls />
                        </div>
                    </Col>

                    <Col lg='2'>
                        <div className="hero__image-box mt-5">
                            <img src={heroImg02} alt="" srcset="" />
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>
            </Container>
        </section>
        {/* =========================== hero section start======================== */}
        <section>
            <Container>
                <Row>
                    <Col lg='3'>
                    <h5 className="services__subtitle"> What we serve</h5>
                    <h2 className="services__title">We offer our best service</h2>
                    </Col>
                    <ServiceList/> {/* upr ServiceList ko import kiya ab export kr rhe hai */}  
                </Row>
            </Container>
        </section>
        {/* ======================= Featured Tour  Section Start ============================ */}
        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5">
                        <Subtitle subtitle={"Explore"}/>
                        <h2 className="featured__tour-title">Our Featured Tours</h2>
                    </Col>
                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>
        {/* ======================= featured tour  section end ============================ */}

        {/* ======================= Experience section Strat ============================ */}
        <section>
            <Container>
                <Row>
                    <Col lg = '6'>
                        <div className="experience__content">
                            <Subtitle subtitle={'Experience'}/>

                            <h2>With our all Experience <br/> We will serve You </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Regular Clients</h6>
                            </div>
                            <div className="counter__box">
                                <span>15k</span>
                                <h6>Years Experience</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg = '6'>
                        <div className="experience__Img">
                            <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* ======================= Experience section End ============================= */}

        {/* ======================= Gallery section Start ============================= */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                    <Subtitle subtitle={'Gallery'}/>
                    <h2 className="gallery__title">Visit our customers tour gallery</h2>
                    </Col>
                    <Col lg='12'>
                    <MasonryImagesGallery/>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* ======================= Gallery section End ============================= */}

        {/* ======================= Testimonial section Start ============================= */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'} />
                    <h2 className="testimonial__title">What our fans say about us</h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonials/>
                    </Col>
                </Row>
            </Container>
        </section>
        {/* ======================= Testimonial section End =============================== */}
        <Newsletter/>
    </>
};

export default Home