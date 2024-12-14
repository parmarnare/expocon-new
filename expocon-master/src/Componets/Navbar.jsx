import React from "react";
import hederlogo from "../images/ExpoCon Logo 1.png";
import { BiPhoneCall } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoPower } from "react-icons/io5";
import { useAuth } from "../context/authContext"; 
import { toast } from "react-toastify";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("token");
    toast.success("Logout Successfully");
    navigate("/");
  };
  return (
    <div
      className="fixed top-0 left-0 w-full bg-white
 shadow-md z-50"
    >
      <div className="flex justify-between items-center px-5 py-2">
        <Link to="/hero">
          <div>
            <img src={hederlogo} alt="Logo" className="h-10" />
          </div>{" "}
        </Link>

        <div className="flex justify-center  gap-2 items-center text-primary font-bold">
          <div className="mr-2">
            <BiPhoneCall size={20} />
          </div>
          <div className="text-sm">+91 7331131070 / 7331115707</div>

          {location.pathname !== "/" && (
            <div onClick={handleLogout} to="/login" className="cursor-pointer">
              <div class="group relative flex justify-center items-center text-primary text-sm font-bold">
                <div class="shadow-md flex items-center group-hover:gap-2 bg-white p-3 rounded-full cursor-pointer duration-300">
                  <IoPower className="text-white bg-primary  rounded-full text-lg p-0.5" />
                  <span class="text-[0px] group-hover:text-sm duration-300">
                    Log Out
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
