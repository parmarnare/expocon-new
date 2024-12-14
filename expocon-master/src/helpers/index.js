import axios from "axios";;

export const checkAuthentication = async (token) => {
  try {
    const response = await axios.get(
      `https://expocon-master.vercel.app/auth/user-auth`,
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
