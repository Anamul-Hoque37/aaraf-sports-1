import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const details = useLoaderData();
    
    
    return (
        <div>
            <h1>View Details</h1>
            <h1>Name:{details.itemName}</h1>
        </div>
    );
};

export default ViewDetails;