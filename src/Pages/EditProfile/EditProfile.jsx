import React, { use, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { auth } from '../../Firebase/firebase.init';
import { updateProfile } from 'firebase/auth';

const EditProfile = () => {

    const { user } = use(AuthContext);
    const [name, setName] = useState(user?.displayName || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");


    const handleSave = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      Swal.fire("Updated!", "Your profile has been updated.", "success");
    } catch (err) {
      Swal.fire("Error!", "Failed to update profile.", "error");
      console.error(err);
    }
  };

    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-md text-center space-y-4">
        <h2 className="text-xl font-bold">Edit Your Profile</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter new name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Enter new photo URL"
          className="input input-bordered w-full"
        />
        <button
          onClick={handleSave}
          className="btn bg-primary text-white hover:bg-pink-600 w-full"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfile;




// import { use, useContext, useState } from "react";
// import { updateProfile } from "firebase/auth";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../Contexts/AuthContext/AuthContext";

// const EditProfile = () => {
//   const { user } = use(AuthContext);
//   const [name, setName] = useState(user?.displayName || "");
//   const [photo, setPhoto] = useState(user?.photoURL || "");

//   const handleSave = async () => {
//     try {
//       await updateProfile(user, {
//         displayName: name,
//         photoURL: photo,
//       });
//       Swal.fire("Updated!", "Your profile has been updated.", "success");
//     } catch (err) {
//       Swal.fire("Error!", "Failed to update profile.", "error");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-100">
//       <div className="bg-white rounded-xl shadow-lg p-8 w-[90%] max-w-md text-center space-y-4">
//         <h2 className="text-xl font-bold">Edit Your Profile</h2>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter new name"
//           className="input input-bordered w-full"
//         />
//         <input
//           type="text"
//           value={photo}
//           onChange={(e) => setPhoto(e.target.value)}
//           placeholder="Enter new photo URL"
//           className="input input-bordered w-full"
//         />
//         <button
//           onClick={handleSave}
//           className="btn bg-primary text-white hover:bg-pink-600 w-full"
//         >
//           Save Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;
