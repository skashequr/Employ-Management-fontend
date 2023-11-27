import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecqure";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/userInfo?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useUser;