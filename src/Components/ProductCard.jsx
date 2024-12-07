import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const {image, itemName,categoryName, description, price, rating, customization, processingTime, stockStatus, userEmail, userName, _id } = product;
    return (
        <div className='py-8'>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{categoryName}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{stockStatus}</p>
                    <div className="card-actions">
                        <Link to= {`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;