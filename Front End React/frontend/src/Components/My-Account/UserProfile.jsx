import React, { useEffect, useState } from "react";
import './myaccount.css'

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  return (
    <div className="profile">
      {userData ? (
        <div>
          <h3>Welcome {userData.user.username}</h3>
          <h5>Email: {userData.user.email}</h5>
          <p>Role: {userData.user.role}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};
export default UserProfile;
