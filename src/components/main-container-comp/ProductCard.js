import './ProductCard.css';
import { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../../App';

export default function ProductCard(props){
    
    const [modalShow, setModalShow] = useState(false);
    
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
                    <div className='product--cat'>{props.category}</div>
                    <span className='product--price'>₹{props.price}</span>
                </div>
            </div>
            <ProductModal 
                show={modalShow} 
                onHide={() => setModalShow(false)} 
                key={props.id}
                item = {props}
            />
        </>
    );
}

function ProductModal(props) {
    
    const cartContext = useContext(CartContext);
    
    return (
        <Modal {...props} centered>
            <Modal.Body>
                <Container>
                    <div className="product--modal">
                        <img
                            className='product--img--modal'
                            src={require(`../../../src/images/${props.item.img}`)}
                            alt="First slide"
                        />
                        <div className='product--info--modal'>
                            <span className='product--title--modal'>{props.item.title}</span>
                            <span className='product--cat--modal'>{props.item.category}</span>
                            <span className='product--price--modal'>₹{props.item.price}</span>
                            <div className='p--button buy--now'>Buy Now</div>
                            {   
                                cartContext.cart.some(item => props.item.id === item.id) ?
                                <div 
                                    className='p--button to--cart'
                                    onClick={props.onHide}
                                >
                                    Go to cart
                                </div> :
                                <div 
                                    className='p--button to--cart' 
                                    onClick={() => cartContext.dispatch({ type: "ADD_TO_CART", payload: props.item })}
                                >
                                    Add to cart
                                </div>
                            }
                            <div className='p--button close' onClick={props.onHide}>Close</div>
                        </div>
                    </div>
                </Container>
            </Modal.Body>
        </Modal>
    );
}