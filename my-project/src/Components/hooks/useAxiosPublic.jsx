import axios from 'axios';
const axiosPublic = axios.create({
    baseURL: "https://backend-seven-ruddy.vercel.app"
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;