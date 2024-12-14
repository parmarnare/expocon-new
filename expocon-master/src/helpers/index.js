import axios from "axios";;

export const checkAuthentication = async (token) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/auth/user-auth`,
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
