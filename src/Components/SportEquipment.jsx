import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const SportEquipment = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <div className='flex flex-col bg-gray-100 justify-center items-center py-8'>
                <h1 className='text-3xl font-semibold'>My Equipment List</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-6 gap-6'>
                    {
                        data.map((data, index) =>
                            <div key={index} className="card glass h-full">
                                <figure className='h-1/2'>
                                    <img className='h-full'
                                        src={data.image} />
                                </figure>
                                <div className="card-body h-1/2 gap-0 bg-white">
                                    <h2 className="card-title">{data.itemName}</h2>
                                    <p className='text-base'>{data.categoryName}</p>
                                    <p className='text-sm'>{data.description}</p>
                                    <div className="card-actions justify-center">
                                        <Link to={`/details/${data._id}`}>
                                            <button
                                                className="bg-blue-500 btn-block hover:bg-blue-600 text-white px-4 py-2 rounded transition"
                                            > View Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SportEquipment;