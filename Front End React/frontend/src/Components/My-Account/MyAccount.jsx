import axios from "axios";
import React, { useEffect, useState } from "react";

const MyAccount = () => {
  useEffect(() => {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");
    

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/v1/getuser/" + email,
          {
            headers: {
              "x-access-token": token,
            },
          }
        );
        const data = response.data; // Access the data property of the response object
        localStorage.setItem("userData", JSON.stringify(data))
        console.log(localStorage.getItem("userData"))
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
    </div>
  );
};

export default MyAccount;
