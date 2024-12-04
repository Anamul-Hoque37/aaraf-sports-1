import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SportEquipment = () => {
    const sports = useLoaderData();

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className="text-2xl font-bold mb-4">All Sports Equipment Table: {sports.length}</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border w-2.5 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Name</th>
                            <th className="border w-2.5 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Category</th>
                            <th className="border w-2.5 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Price</th>
                            <th className="border w-1.5 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sports.map((item) => (
                            <tr key={item._id}>
                                <td className="border border-gray-200 px-4 py-2">{item.itemName}</td>
                                <td className="border border-gray-200 px-4 py-2">{item.categoryName}</td>
                                <td className="border border-gray-200 px-4 py-2">{item.price}</td>
                                <button
                                    className="bg-blue-500 btn-block hover:bg-blue-600 text-white px-4 py-2 rounded transition"
                                    onClick={() => handleViewDetails(item.id)}> View Details
                                </button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SportEquipment;