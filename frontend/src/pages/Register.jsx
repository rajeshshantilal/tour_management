import React, {useState, useContext} from "react";
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/login.css';

import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';

// fetch registration frentend to backend API server
import {AuthContext} from './../context/AuthContext.js';
import {BASE_URL} from './../utils/config.js';


const Register = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const[credentials, setCredentials] = useState ({
        username:undefined,
        email:undefined,
        password:undefined,
    });

    // fetch registration frentend to backend API server
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
// end fetch

    const handleChange = e => {
        setCredentials(prev=> ({...prev, [e.target.id]:e.target.value}));
    };

    const handleClick = async e => {
        e.preventDefault();

        // fetch registration frentend to backend API server
        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(credentials),
            })
            const result = await res.json()
            if (!res.ok) alert(result.message)
            
            dispatch({type:'REGISTER_SUCCESS'})
            navigate('/login')
        } catch (err) {
            alert(err.message);
        }
        //end
    };


    return (
        <section>
            <Container>
                <Row>
                    <Col lg ='8' className="m-auto">
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={registerImg} alt="" />
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Register</h2>
                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input 
                                        type="text" 
                                        placeholder="UserName" 
                                        required 
                                        id="username" 
                                        onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input 
                                        type="email" 
                                        placeholder="Email" 
                                        required 
                                        id="email" 
                                        onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input 
                                        type="password" 
                                        placeholder="password" 
                                        required 
                                        id="password" 
                                        onChange={handleChange} />
                                    </FormGroup>
                                    <Button className="btn secondary__btn auth__btn" type="submit">
                                    Create Account 
                                    </Button>
                                </Form>
                                <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Register;