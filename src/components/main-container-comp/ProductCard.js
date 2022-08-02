import './ProductCard.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';

export default function ProductCard(props){
    const [modalShow, setModalShow] = useState(false);
    
    console.log(props.productImg);
    
    return (
        <>
            <div className="product--card" onClick={() => setModalShow(true)}>
                <img
                    className='product--img'
                    src={require(`../../../src/images/${props.img}`)}
                    alt="Product"
                />
                <div className='product--info'>
                    <span className='product--title'>{props.title}</span>
                    <span className='product--cat'>{props.category}</span>
                    <span className='product--price'>₹{props.price}</span>
                </div>
            </div>
            <ProductModal 
                show={modalShow} 
                onHide={() => setModalShow(false)} 
                key={props.id}
                {...props}
            />
        </>
    );
}

function ProductModal(props) {
    return (
        <Modal  {...props} centered>
            <Modal.Body>
                <Container>
                    <div className="product--modal">
                        <img
                            className='product--img--modal'
                            src={require(`../../../src/images/${props.img}`)}
                            alt="First slide"
                        />
                        <div className='product--info--modal'>
                            <span className='product--title--modal'>{props.title}</span>
                            <span className='product--cat--modal'>{props.category}</span>
                            <span className='product--price--modal'>₹{props.price}</span>
                            <div className='p--button buy--now'>Buy Now</div>
                            <div className='p--button addto--cart'>Add to cart</div>
                            <div className='p--button close' onClick={props.onHide}>Close</div>
                        </div>
                    </div>
                </Container>
            </Modal.Body>
        </Modal>
    );
}