import axios from 'axios';

const axiosSecure = axios.create({
  baseURL:
    "https://jobstack-backend-teal.vercel.app/users?fbclid=IwAR3FeBKN8tiKE3RmD1VmimBEuF_XinFyjRttVolgBdj2e_CCF_1wTRadRsI",
});

const useAxiosSecure = () => {

    return [axiosSecure];
};

export default useAxiosSecure;