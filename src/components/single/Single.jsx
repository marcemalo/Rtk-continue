import React from 'react'
import { useGetSingleProductsQuery } from '../../redux/api/profile';

const Single = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

     const { data } = useGetSingleProductsQuery();
    
  return (
    <div>
        <h1>Single</h1>
        <p>{data && data.payload && data.payload.product_name}</p>
        <img src={data && data.payload && data.payload.product_images[0]} alt="" />
        
    </div>
  )
}

export default Single