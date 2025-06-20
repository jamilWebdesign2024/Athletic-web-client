import React, { use } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import { Link } from 'react-router';

const ViewProfile = () => {

    const { user } = use(AuthContext);



    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-100">
            <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-md text-center space-y-4">
                <img
                    src={user?.photoURL || "https://i.ibb.co/2YjZgZ8/default-user.png"}
                    alt="User"
                    className="w-28 h-28 mx-auto rounded-full border-4 border-primary"
                />
                <h2 className="text-xl font-bold">{user?.displayName}</h2>
                <p className="text-gray-500">{user?.email}</p>
                <Link
                    to="/profile/edit"
                    className="btn bg-primary text-white hover:bg-pink-600"
                >
                    Edit Profile
                </Link>
            </div>
        </div>
    );
};

export default ViewProfile;








// import { Link, use } from "react";
// import { useContext } from "react";
// import { AuthContext } from "../../Contexts/AuthContext/AuthContext";


// const ViewProfile = () => {
//   const { user } = use(AuthContext);

//   return (
// <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-100">
//   <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-md text-center space-y-4">
//     <img
//       src={user?.photoURL || "https://i.ibb.co/2YjZgZ8/default-user.png"}
//       alt="User"
//       className="w-28 h-28 mx-auto rounded-full border-4 border-primary"
//     />
//     <h2 className="text-xl font-bold">{user?.displayName}</h2>
//     <p className="text-gray-500">{user?.email}</p>
//     <Link
//       to="/profile/edit"
//       className="btn bg-primary text-white hover:bg-pink-600"
//     >
//       Edit Profile
//     </Link>
//   </div>
// </div>
//   );
// };

// export default ViewProfile;
