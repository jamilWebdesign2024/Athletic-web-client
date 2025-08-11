import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext/authContext';

const ViewProfile = () => {

    const { user } = use(AuthContext);



    return (
        <div className="min-h-screen flex items-center justify-center bg-base-300">
            <div className="rounded-xl shadow-lg p-8 w-[90%] max-w-md bg-base-100 text-center space-y-4">
                <img
                    src={user?.photoURL || "https://i.ibb.co/2YjZgZ8/default-user.png"}
                    alt="User"
                    className="w-28 h-28 mx-auto rounded-full border-4 border-primary"
                />
                <h2 className="text-xl font-bold">{user?.displayName}</h2>
                <p className="text-gray-500">{user?.email}</p>
                <Link
                    to="/profile/edit"
                    className="btn bg-primary text-base-content"
                >
                    Edit Profile
                </Link>
            </div>
        </div>
    );
};

export default ViewProfile;
