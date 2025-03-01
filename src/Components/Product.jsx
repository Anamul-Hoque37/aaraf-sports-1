import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('https://b10-a10-server-side-anamul-hoque37.vercel.app/add')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-11/12 gap-6 mx-auto'>
            {
                products.map(product => <ProductCard key={product._id}product={product}></ProductCard>)
            }
        </div>
    );
};

export default Product;