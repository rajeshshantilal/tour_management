import React, {useRef, useEffect, useContext} from "react";
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
// fetch header for backend API
import {AuthContext} from './../../context/AuthContext';

const nav__link=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/tours',
        display:'Tours'
    },
]

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    // fetch Header for backend api
    const navigate= useNavigate();
    const {user, dispatch} = useContext(AuthContext)
    // console.log(user);
    // console.log(dispatch);

    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }
    // end fetch
    const stickyHeaderFunc = ()=> {
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticky__header')
            }else{
                headerRef.current.classList.remove('sticky__header')
            }
        });
    }

useEffect(()=> {
    stickyHeaderFunc();
    return window.removeEventListener('scroll', stickyHeaderFunc);
});

    const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')
    return (
        <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper d-flex align-items-center justify-content-between ">
                {/* ============================= Logo ============================= */}
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    {/* ========================= Logo End ========================= */}
                    
                    {/* ========================= Menu Start ========================= */}
                    
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu d-flex align-content-around gap-5">
                            {
                                nav__link.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink to = {item.path} className={ navClass => navClass.isActive ? 'active__link': ""}
                                        > {item.display} </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* ========================= Menu End ========================= */}

                    <div className="nav__right d-flex align-items-center gap-4 ">
                        <div className="nav__btn d-flex align-items-center gap-4 ">
                        
                            {/* after login user profile backend fetch api */}
                        {user? (
                            <>
                                <h5 className="mb-0">{user.username}</h5>
                                <Button className="btn btn-dark" onClick={logout}>Logout</Button>
                            </>
                            ) : ( 
                            <>
                            <Button className="btn secondary__btn"><Link to='/login'>Login</Link></Button>
                            <Button className="btn primary__btn"><Link to='/register'>Register</Link></Button>
                            </>
                            )
                        }
                        {/* End */}
                        </div>
                        <span className="mobile__menu" onClick={toggleMenu}>
                        <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
)};

export default Header ;