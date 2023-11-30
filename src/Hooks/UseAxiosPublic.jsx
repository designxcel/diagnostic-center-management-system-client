import axios from "axios";

const axiosPublic = axios.create({
    baseURL:"https://diagnostic-center-management-server.vercel.app"
})
const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;