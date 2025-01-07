import React from 'react';

const SportCategory = () => {
    return (
        <div className='py-10 flex bg-gradient-to-r from-blue-900 via-slate-200 to-indigo-900 items-center justify-around'>
            <div className='btn-accent p-8 border-teal-500 border-2 text-3xl'><button>Cricket</button></div>
            <div className='btn-accent p-8 border-teal-500 border-2 text-3xl'><button>Soccer</button></div>
            <div className='btn-accent p-8 border-teal-500 border-2 text-3xl'><button>Tennis</button></div>
        </div>
    );
};

export default SportCategory;