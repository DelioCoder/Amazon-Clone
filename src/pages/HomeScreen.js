import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

//Redux
import { listProducts } from '../redux/actions/productActions';

/* Components */
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    
    dispatch(listProducts());

  }, []);
  
    return (
        <>
        {loading ? (<LoadingBox />) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : 
        (
          <div className="row center">
            {
              products.map(product => (
                <Product key={product._id} product={product} />
              ))
            }
                               
          </div>
        )}
        </>
    )
}
