import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CTooltip } from '@coreui/react';
import { CButton } from '@coreui/react';

const Update = () => {
    const data = useLoaderData();


    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const image = form.image.value;
        const itemName = form.itemName.value;
        const categoryName = form.categoryName.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;

        const updatedData = { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus, userEmail, userName }


        fetch(`https://b10-a10-server-side-anamul-hoque37.vercel.app/add/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col gap-14">
                    <div className="text-center w-3/4">
                        <div>
                            <CTooltip
                                content="You can add text into a component and it will be instanced like any other part of the component."
                                placement="bottom"
                            >
                                <CButton color="secondary">Update Component</CButton>
                            </CTooltip>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl">
                        <form onSubmit={handleUpdate} className="card-body">
                            <div className='grid grid-cols-1
                            md:grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input name="image" type="text" defaultValue={data.image} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Name</span>
                                    </label>
                                    <input name='itemName' type="text" defaultValue={data.itemName} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category Name</span>
                                    </label>
                                    <input name='categoryName' type="text" defaultValue={data.categoryName} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input name='description' type="text" defaultValue={data.description} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input name='price' type="text" defaultValue={data.price} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input name='rating' type="text" defaultValue={data.rating} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Customization</span>
                                    </label>
                                    <input name='customization' type="text" defaultValue={data.customization} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Processing Time</span>
                                    </label>
                                    <input name='processingTime' type="text" defaultValue={data.processingTime} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Stock Status</span>
                                    </label>
                                    <input name='stockStatus' type="text" defaultValue={data.stockStatus} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <input name='userEmail' type="Email" defaultValue={data.userEmail} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input name='userName' type="text" defaultValue={data.userName} className="input input-bordered" required />
                                </div>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Item</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;