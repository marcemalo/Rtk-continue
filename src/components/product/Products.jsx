import React from 'react'
import { useGetProductsQuery } from '../../redux/api/productsApi'
import { Link } from 'react-router-dom';

const Products = () => {
  const { data } = useGetProductsQuery();

  return (
    <div className="single">
      <div className="wrapper">
      <div className='container'>
      {data && data.payload && data.payload.map(product => (
        <div key={product._id}>
         <Link to={`/product/${product._id}`}><img className='image' src={product.product_images[0]} alt={product.product_name} /></Link>
       
          <h1 className='name'>{product.product_name}</h1>
          <p className='price'>Price: ${product.original_price}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Products