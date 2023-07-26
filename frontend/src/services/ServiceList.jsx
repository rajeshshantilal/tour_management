import React from "react";
import ServiceCard from "./ServiceCard";
import {Col} from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc: 'lorem yes it react app ,for rented car booking.',
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:'lorem yes it react app ,for rented car booking.'
    },
    {
        imgUrl:customizationImg,
        title:"Customization",
        desc:'lorem yes it react app ,for rented car booking.'
    }
]

//import krdo home.jsx mai
const ServiceList = () => {
    return (
        <>
            {servicesData.map((item,index)=>(
                <Col lg='3' md='6' sm='12' className="mb-4" key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList;