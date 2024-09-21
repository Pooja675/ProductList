import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ViewProducts from "./ViewProducts";

const Home = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // credentials:'include'
      });
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, []);
  
  return ( 
    <>

<div className="flex justify-between items-center bg-pink-100">
       <div>
        <img
          className="w-24 p-4"
          alt="logo"
          src="https://i.pinimg.com/originals/b2/c6/ae/b2c6aedc6ab75b271424ac552cb76d19.png"
        />
      </div>

      <div className="p-3">
        {/* <h2 className=" text-lg font-bold text-gray-500">Home</h2> */}
        {user && (
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium text-gray-500">
              {user.firstName} - {user.email}
            </p>
          </div>
        )}
      </div>
     

      <div className="flex items-center">
        <Link to={"/login"}>
          <button className="px-4 py-2 m-5 mr-10 bg-red-500 text-white font-semibold rounded-lg ">
            Login
          </button>
        </Link>
      </div>
    </div>
    <ViewProducts />
    </>
    
    
  );
};

export default Home;
