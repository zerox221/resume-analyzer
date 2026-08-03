import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

export function UserContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [report,setReport] = useState(null);

  const value = {
    loading,
    setLoading,
    user,
    setUser,
    report,setReport,
  };

  useEffect(() => {
  const getUser = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/user/get-me",
        {
          withCredentials: true,
        }
      );
      setUser(data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  getUser();
}, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
