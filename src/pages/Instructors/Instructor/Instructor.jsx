import React from 'react';

const Instructor = ({ instructor }) => {
    const { name, email, profile } = instructor;

    return (
        <div className="card card-compact w-96 bg-base-100 rounded shadow-xl">
            <figure><img src={profile} alt="instructor" className="w-full h-[300px] object-cover" /></figure>
            <div className="card-body my-4 items-center">
                <h2 className="card-title">Name: {name}</h2>
                <p className="font-medium text-base">Email: {email}</p>
            </div>
        </div>
    );
};

export default Instructor;