import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipment = () => {
    const sports = useLoaderData();
    console.log(sports)
    const [sortOrder, setSortOrder] = useState("default"); // "asc", "desc", "default"
    const sortedProducts = [...sports].sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0; // Default order
    });
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://b10-a10-server-side-anamul-hoque37.vercel.app/add/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingUsers = users.filter(user => user._id !== id)
                            setUsers(remainingUsers);
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className='w-11/12 mx-auto py-8'>
                <div className='flex flex-col md:flex-row justify-center items-center md:justify-between'>
                    <h1 className="text-2xl font-bold mb-4">All Sports Equipment Table: {sports.length}</h1>
                    {/* Dropdown for Sorting */}
                    <div className="mb-4 flex justify-center items-center gap-2">
                        <label htmlFor="sort" className="block mb-2 text-xl font-bold text-gray-700">
                            Sort by Price
                        </label>
                        <select
                            id="sort"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="default">Default Order</option>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200 shadow-md">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border w-1/12 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">No.</th>
                                <th className="border w-1/3 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Name</th>
                                <th className="border w-1/4 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Category</th>
                                <th className="border w-1/6 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Price</th>
                                <th className="border w-1/12 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Update</th>
                                <th className="border w-1/12 border-gray-200 px-4 py-2 text-left font-medium text-gray-700">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedProducts.map((item, index) => (
                                <tr key={item._id}>
                                    <td className="border border-gray-200 px-4 py-2">{index + 1}</td>
                                    <td className="border border-gray-200 px-4 py-2">{item.itemName}</td>
                                    <td className="border border-gray-200 px-4 py-2">{item.categoryName}</td>
                                    <td className="border border-gray-200 px-4 py-2">{item.price}</td>
                                    <td className="border border-gray-200 w-16 h-full">
                                        <Link to={`/update/${item._id}`}><button className="btn btn-primary w-full h-full">Update</button></Link>
                                    </td>
                                    <td className="border border-gray-200 w-16 h-full">
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-primary w-full h-full">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyEquipment;