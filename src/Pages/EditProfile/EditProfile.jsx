import React, { use, useState } from 'react';
import Swal from 'sweetalert2';
import { auth } from '../../Firebase/firebase.init';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Contexts/AuthContext/authContext';

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
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300">
      <div className="rounded-xl shadow-lg p-8 w-[90%] max-w-md text-center space-y-4">
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
          className="btn bg-primary text-base-content w-full"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
