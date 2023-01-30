import React,{useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);

    const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
    .then(response => {
        return response.json()
    })
    .then(data => {
        setData(data)
    })
}
useEffect(() => {
    fetchData()
},[])



const filterProduct =(cat) =>{
    const updatedList =data.filter((x)=> x.category === cat);
    setFilter(updatedList);
}


const ShowProducts = () => {
    return(
        <>
        <div className='buttons d-flex justify-content-center mb-5 pb-5'>
            <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
            <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
            <button className='btn btn-outline-dark me-2' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
            <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("jewelery")}>Jewelery</button>
            <button className='btn btn-outline-dark me-2'onClick={()=>filterProduct("electronics")}>Electronics</button>
        </div>

{/* list items */}
        {filter.map((product) => {
            return(
                <>
                <div className="col-md-3 mb-4" >
                <div className="card h-100 text-center p-4" key={product.id}>
  <img src={product.image} className="card-img-top" alt={product.title} height="200px"/>
  <div className="card-body">
    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
    <p className="card-text lead fw-bold"> Rs-{product.price}</p>
    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
  </div>
</div>
                </div>
                </>
            )
        })}

        </>
    );
};

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>

                <div className="row justify-content-center">{<ShowProducts/> }</div>
                <h1 className="display-6 fw-bolder text-center">Click on the above button to check items</h1>
            </div>
        </div>
    );
}

export default Products;