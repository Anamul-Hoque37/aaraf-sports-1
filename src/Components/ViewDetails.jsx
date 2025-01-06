import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const ViewDetails = () => {
    const details = useLoaderData();
    const { image, itemName, categoryName, description, price, processingTime, customization, stockStatus, userEmail, userName, _id } = details;

    return (
        <div className='py-10 flex flex-col gap-4 justify-center bg-gray-100 items-center px-6 sm:px-8 md:px-10 lg:px-12'>
            <div className="card card-side bg-base-100 flex flex-col md:flex-row gap-4 p-6 sm:px-8 md:px-10 w-11/12">
                <figure className='w-full md:w-1/2'>
                    <img
                        className='w-full h-full'
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body w-full md:w-1/2">
                    <h2 className="card-title text-5xl">{categoryName}</h2>
                    <p><span className='text-lg text-slate-500 font-semibold'>Name:</span>  {itemName}</p>
                    <p><span className='text-lg text-slate-500 font-semibold'>Description:</span>  {description}</p>
                    <p><span className='text-lg text-slate-500 font-semibold'>Customization:</span>  {customization}</p>
                    <p><span className='text-lg text-slate-500 font-semibold'>Processing Time:</span>  {processingTime}</p>
                    <p><span className='text-lg text-slate-500 font-semibold'>Price:</span>  {price}</p>
                    <p><span className='text-lg text-slate-500 font-semibold'>Available Stock:</span> {stockStatus}</p>

                </div>
            </div>
            <div className='text-sm border p-2 bg-indigo-700 rounded-lg'>
                <Link to='/' className='flex justify-center text-white items-center gap-5'> <FaArrowLeftLong /> Back to Home Page</Link>
            </div>
        </div>
    );
};

export default ViewDetails;