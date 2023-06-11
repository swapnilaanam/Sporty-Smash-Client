import React from 'react';

const Instructor = ({ instructor }) => {
    const { name, email, profile } = instructor;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={profile} alt="instructor" /></figure>
            <div className="card-body my-4 items-center">
                <h2 className="card-title">Name: {name}</h2>
                <p>Email: {email}</p>
            </div>
        </div>
    );
};

export default Instructor;