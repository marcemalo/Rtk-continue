import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/api/productsApi';
import { Link } from 'react-router-dom';

const Single = () => {
  const { id } = useParams();
  const { data } = useGetProductsQuery();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (data) {
      const foundProduct = data.payload.find(p => p._id === id);
      setProduct(foundProduct);
    }
  }, [data, id]);

  console.log(product)

  if (!product) return <p>Loading...</p>;

  return (
    <div className='single'>
    <div className='wrapper'>
      <div className='container'>
        <div className='carousel'>
          <input type="radio" id="slide1" name="carousel" defaultChecked />
          <input type="radio" id="slide2" name="carousel" />
          <input type="radio" id="slide3" name="carousel" />

          <div className='slides'>
            <div className='slide' id="s1">
              <img className='image' src={product.product_images[0]} alt="Slide 1" />
            </div>
            <div className='slide' id="s2">
              <img className='image' src={product.product_images[1]} alt="Slide 2" />
            </div>
            <div className='slide' id="s3">
              <img className='image' src={product.product_images[2]} alt="Slide 3" />
            </div>
          </div>

          <div className='controls'>
            <label htmlFor="slide1" className='control'></label>
            <label htmlFor="slide2" className='control'></label>
            <label htmlFor="slide3" className='control'></label>
          </div>
        </div>
        <h1 className='name'>{product.product_name}</h1>
        <p className='price'>Price: ${product.original_price}</p>
        <p className='description'>Description: {product.description}</p>
        <p className='likes'>Likes: {product.likes}</p>
        <hr />
        <h1 className='likedby__h1'>Likes</h1>
        {product.likedby.map((person, index) => (
          <h5 key={index} className='likedby'>{person}</h5>
        ))}
        <Link to='/'><button className='back'>Back to home</button></Link>
      </div>
    </div>
  </div>
  );
};

export default Single;
