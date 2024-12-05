import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const {id} = useParams()
    const product = useLoaderData();
    console.log(id)
    return (
        <div>
            <h1>View Details</h1>
        </div>
    );
};

export default ViewDetails;