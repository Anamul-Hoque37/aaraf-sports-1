import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3000/add')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 gap-6 mx-auto'>
            {
                products.map(product => <ProductCard key={product._id}product={product}></ProductCard>)
            }
        </div>
    );
};

export default Product;