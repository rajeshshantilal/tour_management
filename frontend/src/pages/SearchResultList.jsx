import React, {useState} from "react";

import CommonSection from './../shared/CommonSection.jsx'
import { Container, Row, Col } from "reactstrap";
// Fetch SearchResultList backend API
import { useLocation } from "react-router-dom";
import TourCard from "./../shared/TourCard.jsx";
import Newsletter from '../shared/Newsletter.jsx'
// end Fetch

const SearchResultList = () => {
    // Fetch SearchResultList backend API
    const location = useLocation()
    const [data] = useState(location.state)
    // end      
    return <>
        <CommonSection title={'Tour Search Result'}/>
        <section>
            <Container>
                {/* Fetch SearchResultList backend API */}
                <Row>
                    {data.length === 0 ? (
                        <h4 className="text-center">No tour found</h4>
                    ):(
                        data?.map(tour=>(
                            <Col lg='3' className="mb-4" key={tour._id}>
                                <TourCard tour={tour}/>
                            </Col>
                        ))
                    )}
                </Row>
                {/* end Fetch */}
            </Container>
        </section>
        <Newsletter/>
    </>
};

export default SearchResultList;