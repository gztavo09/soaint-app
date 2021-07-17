import React, { useContext, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PopoverItem, PopoverRemoveItem, PopoverElement, PopoverHeader, PopoverBody, PopoverContainer, PopoverFooter, Button } from './styles'
import AppContext from '../../context/AppContext'
import { MdClose, MdShoppingCart } from 'react-icons/md'
import Overlay from 'react-bootstrap/Overlay'

const Preview = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const { state, removeFromCart } = useContext(AppContext)
    const { cart } = state
    
    const handleSumTotal = () => {
        let sum = 0;
        cart.map(item => {
            sum = sum + item.price
        })

        return sum.toFixed(2);
    }

    const toggleOverlay = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div ref={ref}>
                <Button onClick={toggleOverlay}>
                    <MdShoppingCart  />
                </Button>   
                <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref.current}
                    containerPadding={20}
                >
                    <PopoverContainer id="popover-contained">
                        <PopoverHeader>{ cart.length > 0 ? 'Lista de pedidos:' : 'Sin pedidos:' }</PopoverHeader>
                        <PopoverBody>
                            <div className="Checkout-content">
                                { 
                                    cart.map((item) => (
                                            <PopoverItem key={item.id}>
                                                <PopoverElement>
                                                    <h4>{item.title}</h4>
                                                    <span>$ {item.price}</span>
                                                </PopoverElement>
                                                {/* <PopoverRemoveItem onClick={() => removeFromCart(item)} type="button">
                                                    <MdClose />
                                                </PopoverRemoveItem> */}
                                            </PopoverItem>
                                        ))
                                }
                            </div>
                            
                        </PopoverBody>
                            {cart.length > 0 && (
                                <PopoverFooter>{`Total: $ ${handleSumTotal()}`}</PopoverFooter>
                            )}
                    </PopoverContainer>
                </Overlay>
        </div>
	);
}

export default Preview;
