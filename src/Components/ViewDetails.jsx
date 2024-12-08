import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const details = useLoaderData();
    const {image, itemName,categoryName, description, price, processingTime, customization, stockStatus, userEmail, userName, _id } = details;

    return (
        <div className='py-10 flex justify-center items-center'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{categoryName}</h2>
                    <p>Name:{itemName}</p>
                    <p>Description:{description}</p>
                    <p>Customization:{customization}</p>
                    <p>Processing Time:{processingTime}</p>
                    <p>Price:{price}</p>
                    <p>Available Stock:{stockStatus}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;