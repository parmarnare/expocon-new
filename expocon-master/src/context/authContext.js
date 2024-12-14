import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({
    user: null,
  });

  const getUser = async (token) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/auth/user-auth`,
        {
          headers: {
            authorization: token,
          },
        }
      ); 
      
      if (res?.data?.success) {
        setAuth({
          user: res.data.user,
        });
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token); 
    } else {
      setAuth({ user: null });
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
