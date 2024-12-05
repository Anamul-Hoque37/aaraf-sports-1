import React from 'react';

const AddEquipment = () => {
    const handleAddItem = event => {
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

        const newEquipment = {image, itemName,categoryName, description, price, rating, customization, processingTime, stockStatus, userEmail, userName }
        // console.log(newEquipment)

        fetch('http://localhost:3000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center w-3/4">
                        <h1 className="text-5xl font-bold">Add Equipment</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl">
                        <form onSubmit={handleAddItem} className="card-body">
                            <div className='grid grid-cols-1
                            md:grid-cols-2 gap-4'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input name="image" type="text" placeholder="Image" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Item Name</span>
                                    </label>
                                    <input name='itemName' type="text" placeholder="Item Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Category Name</span>
                                    </label>
                                    <input name='categoryName' type="text" placeholder="Category Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input name='description' type="text" placeholder="Description" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input name='price' type="text" placeholder="Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input name='rating' type="text" placeholder="Rating" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Customization</span>
                                    </label>
                                    <input name='customization' type="text" placeholder="Customization" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Processing Time</span>
                                    </label>
                                    <input name='processingTime' type="text" placeholder="Processing Time" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Stock Status</span>
                                    </label>
                                    <input name='stockStatus' type="text" placeholder="Stock Status" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <input name='userEmail' type="Email" placeholder="User Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input name='userName' type="text" placeholder="User Name" className="input input-bordered" required />
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

export default AddEquipment;