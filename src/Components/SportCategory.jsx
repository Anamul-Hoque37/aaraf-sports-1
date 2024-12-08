import React from 'react';

const SportCategory = () => {
    return (
        <div className='py-10 flex items-center justify-around'>
            <div className='btn-accent p-8 border-teal-500 border-2 text-3xl'><button>Cricket</button></div>
            <div><button className='btn-accent p-8 border-teal-500 border-2 text-3xl'>Soccer</button></div>
            <div><button className='btn-accent p-8 border-teal-500 border-2 text-3xl'>Tennis</button></div>
        </div>
    );
};

export default SportCategory;