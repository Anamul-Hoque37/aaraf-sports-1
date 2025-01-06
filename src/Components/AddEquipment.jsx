import React from 'react';
import { AuthContext } from './Authentication/AuthProvider';
import { useContext } from 'react';
import { CTooltip } from '@coreui/react';
import { CButton } from '@coreui/react';

const AddEquipment = () => {
    const { user } = useContext(AuthContext);
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

        const newEquipment = { image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus, userEmail, userName }
        // console.log(newEquipment)

        fetch('http://localhost:3000/add/equipment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEquipment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <div className="hero bg-gray-100 min-h-screen">
                <div className="hero-content w-full sm:w-11/12 md:w-10/12 lg:w-3/4 p-10 flex-col gap-14 md:gap-10">
                    <div className="text-center w-3/4">
                        <div>
                            <CTooltip
                                content="You can add text into a component and it will be instanced like any other part of the component."
                                placement="bottom"
                                className='text-center text-blue-600 px-8'
                            >
                                <CButton className='bg-blue-300 hover:bg-blue-500' color="secondary">Add Your Component</CButton>
                            </CTooltip>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleAddItem} className="card-body">
                            <div className='w-full grid grid-cols-1
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
                                    <input name='price' type="number" placeholder="Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input name='rating' type="number" placeholder="Rating" className="input input-bordered" required />
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
                                    <input name='stockStatus' type="number" placeholder="Stock Status" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <input name='userEmail' type="Email" placeholder={user.email} className="input input-bordered" required readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <input name='userName' type="text" placeholder={user.displayName} className="input input-bordered" required readOnly/>
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