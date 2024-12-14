import React from "react"; 

import { MdOutlineSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Homefooter = () => {
  const [auth] = useAuth();

  return (
    <div className="flex justify-center bg-primary">
      <div className=" text-center flex gap-2 text-white py-2">
        <div>
          © ExpoCon by SaaScraft Studio (India) Pvt. Ltd. | All Rights Reserved.
        </div>

        <Link to="/setting">
          <div>
            {auth?.user?.role === "superAdmin" && (
              <MdOutlineSettings className="text-white" size={24} />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homefooter;
