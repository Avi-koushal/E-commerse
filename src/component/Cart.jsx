import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addCart,delCart } from '../redux/actions/index'

const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleButton = (item) => {
        dispatch (addCart(item))
    }
    const handleButto = (item) => {
        dispatch (delCart(item))
    }

    const cartItems = (product) =>{
        return (
            <>
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className='container py-4' key={product.id}>
                    {/* <button onClick={()=>handleClose(product)} className="btn-close float-end" aria-label='Close'></button> */}
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className='col-md-4'>
                            <h3>{product.title}</h3>
                            <p className='lead fw-bold'>RS-{product.price}</p>
                            <p className="lead fw-bold">
                                {product.qty} X Rs{product.price}= Rs{product.qty * product.price}
                            </p>
                            <button onClick={()=>handleButton(product)} className="btn btn-outline-dark ms-2 px-3 py-2 btn-sm">+</button>
                        <button onClick={()=>handleButto(product)} className="btn btn-outline-dark ms-2 px-3 py-2 btn-sm">-</button>
                        </div> 
                    </div>
                </div>
            </div>
            <hr/>
        <button className="btn btn-success col-4 d-grid gap-2 mx-auto">Order Now</button>
        <hr/>
            </>
        );
    }

    const emptyCart = ()=>{
        return (
            <div className='px-4 my-5 bg-light rounded-3'>
                <div className='container py-4'>
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
        {state?.length === 0 && emptyCart()}
        {state?.length !== 0 && state?.map(cartItems)}
        
        </>
    )
}
export default Cart