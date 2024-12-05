import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const {image, itemName,categoryName, description, price, rating, customization, processingTime, stockStatus, userEmail, userName, _id } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <Link to= {`product/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;