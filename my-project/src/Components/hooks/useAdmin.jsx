import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecqure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAdmin = () => {
  const { user, lodder } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !lodder,
    queryFn: async () => {
      console.log("asking or checking is admin", user);
      const res = await axiosSecure.get(`/loginUser?email=${user.email}`);
    //   console.log(res.data);
      
      return res.data;
    },
  });
  console.log(isAdmin);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;


