import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './Authentication/AuthProvider';

const MyEquipment = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>My Equipment List</h1>
        </div>
    );
};

export default MyEquipment;