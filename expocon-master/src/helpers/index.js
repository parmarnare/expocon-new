import axios from "axios";;

export const checkAuthentication = async (token) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/v1/auth/user-auth`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response?.data?.ok 
  } catch (error) {
    console.error("Error while checking user authentication:", error);
  }
};
