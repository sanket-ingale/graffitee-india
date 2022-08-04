import './Header.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState } from 'react';
import Cart from './main-container-comp/Cart';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <ul className='nav--bar'>
        <CustomLink to='/' className='no--style'>Home</CustomLink>
        <CustomLink to='/explore' className='no--style'>Explore</CustomLink>
        <CustomLink to='/custyo' className='no--style'>Customize your own</CustomLink> 
      </ul>
      <Link to='/admin'>
        <img className="web--logo" src={require("../images/GRAFFITEE@2x.png")} alt="graffitee-logo"/>
      </Link>
      <ul className='nav--bar'>
        <input type="search" placeholder="Search designs" className='search--bar'/>
        <div
          className={`cart--bg ${true && "cart--count"}`}
          productcount={9}
          onClick={handleShow}
        />
      </ul>
      <Offcanvas 
        className="off-canvas" 
        show={show} 
        onHide={handleClose} 
        placement="end" 
        backdrop={false}
        scroll={true}>
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title className='cart--title'>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='off-canvas--body'>
          <Cart/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function CustomLink({ to, children, ...props }){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
