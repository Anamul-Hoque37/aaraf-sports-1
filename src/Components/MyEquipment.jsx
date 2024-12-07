import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyEquipment = () => {
    const data = useLoaderData();
    const [users, setUsers] = useState(data);
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

                fetch(`http://localhost:3000/add/${id}`, {
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
        <div className='flex flex-col justify-center items-center py-8'>
            <h1 className='text-3xl font-semibold'>My Equipment List</h1>
            <div className='grid grid-cols-3 pt-4 gap-6'>
                {
                    data.map((data, index) =>
                        <div key={index} className="card glass w-96">
                            <figure>
                                <img
                                    src={data.image} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.itemName}</h2>
                                <p>{data.categoryName}</p>
                                <p>{data.description}</p>
                                <div className="card-actions justify-center">
                                    <Link to={`/update/${data._id}`}><button className="btn btn-primary">Update</button></Link>
                                    <button onClick={() => handleDelete(data._id)} className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyEquipment;