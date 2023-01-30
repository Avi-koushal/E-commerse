import React,{useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";


const Product = () => {

    const {id} = useParams();
    const [product,setProduct] = useState([]);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    const getProduct = () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setProduct(data)
        })
    }
        useEffect(() => {
        getProduct()
    },[])

    //  product details
    const ShowProduct=()=>{
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">{product.category}</h4>
                <h1 className="display-S">{product.title}</h1>
                <p className="lead fw-bolder">Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i></p>
                <h3 className="display-6 fw-bold my-4">Rs {product.price}</h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(product)}>Add to Cart</button>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">Go to Cart</NavLink>
            </div>
            </>
        )
    }
    return(
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {<ShowProduct/>}
                </div>
            </div>
        </div>
    );
}

export default Product;