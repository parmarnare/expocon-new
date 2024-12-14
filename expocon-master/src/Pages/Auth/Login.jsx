import React, { useState } from "react";
import logo from "../../images/ExpoCon Logo 1.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import axios from "axios";
import { toast } from "react-toastify";
// import toast from 'react-hot-toast';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/auth/login`, {
        email,
        password,
      });

      if (res?.data?.success) {
        setAuth({ user: res?.data?.user})
        localStorage.setItem("token", res?.data?.token);
        navigate("/hero");
        toast.success("Login success");
      } else {
        toast(res.data.message);
        console.log(res);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("error:,", error);
    }
  };

  return (
    <div className="bg-login bg-cover bg-center bg-no-repeat h-screen w-full">
      <div className="flex justify-center items-center text-cyan-400 h-full">
        <section class="bg-gray-50 dark:bg-white rounded-2xl mx-5">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                <img src={logo} alt="" />
              </h1>
              <form
                onSubmit={handleSubmit}
                class="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    class="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary dark:focus:border-primary"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary dark:focus:border-primary"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  class="w-full my-3 text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
