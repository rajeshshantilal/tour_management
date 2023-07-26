import React, {useState, useContext} from "react";
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/login.css';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png'

// fetch login frentend to backend API server
import {AuthContext} from './../context/AuthContext.js';
import {BASE_URL} from './../utils/config.js';
//end 

const Login = () => {
    const [credentials, setCredentials] = useState ({
        email:undefined,
        password:undefined,
    });

    // fetch login frentend to backend API server
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    // end fetch

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value}));
    };

    const handleClick = async e => {
        e.preventDefault();
        // fetch login frentend to backend API server
        dispatch ({type:'LOGIN_START'})

        try {
            const res = await fetch (`${BASE_URL}/auth/login`,{
                method:'post',
                headers:{
                    "content-type":"application/json"
                },
                credentials:'include',
                body: JSON.stringify(credentials),
            })
            const result = await res.json()
            if(!res.ok) alert(result.message)

            console.log(result.data);
            console.log(result.token);

            dispatch({type:'LOGIN_SUCCESS', payload:{...result.data,"token":result.token}})
            navigate('/')
        } catch (err) {
            dispatch({type: 'LOGIN_FAILURE', payload:err.message})
        }
    };
    // end fetch

    return (
        <section>
            <Container>
                <Row>
                    <Col lg ='8' className="m-auto">
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={loginImg} alt="" />
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2>Login</h2>
                                <Form onSubmit={handleClick}>
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
                                    <button className="btn secondary__btn auth__btn" type="submit">Login</button>
                                </Form>
                                <p>Don't have an account? <Link to='/register'>Create</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Login;