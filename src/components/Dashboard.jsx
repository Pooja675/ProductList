import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
    <div className="bg-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div>
            <h2 className="text-lg font-bold text-gray-500">Dashboard</h2>
            {user && (
              <div className="flex flex-col items-center">
                <p className="text-sm font-medium text-gray-500">
                  Welcome, {user.firstName} {user.lastName}
                </p>
              </div>
            )}
          </div>
          <div className="flex">
            <Link
              to={"/addproduct"}
              className="p-2 m-2 text-gray-500 font-bold"
            >
              {" "}
              <p>Add</p>{" "}
            </Link>
            <Link
              to={"/productlist"}
              className="p-2 m-2 text-gray-500 font-bold"
            >
              {" "}
              <p>Products List</p>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
