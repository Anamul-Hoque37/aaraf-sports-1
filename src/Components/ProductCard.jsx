import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus, userEmail, userName, _id } = product;
    return (
        <div className='py-8'>
            <div className="card bg-base-100 gap-0 shadow-xl w-full h-full">
                <figure className="h-1/2 w-full">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-t-xl h-full w-full" />
                </figure>
                <div className="card-body bg-white items-start rounded-b-xl h-1/2 gap-0 pr-4 text-left">
                    <h2 className="card-title">{categoryName}</h2>
                    <p className='text-sm font-medium'>{description}</p>
                    <div className='flex flex-row items-center gap-6 justify-between'>
                        <div className='flex flex-col'>
                            <p className='text-base font-semibold text-left'>{price}</p>
                            <p className='text-base font-normal '>{stockStatus}</p>
                        </div>
                        <div className="card-actions">
                            <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;