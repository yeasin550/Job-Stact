import axios from 'axios';

const axiosSequre = axios.create({
  baseURL:
    "https://jobstack-backend-teal.vercel.app/users?fbclid=IwAR3FeBKN8tiKE3RmD1VmimBEuF_XinFyjRttVolgBdj2e_CCF_1wTRadRsI",
});

const useAxioSequre = () => {

    return [axiosSequre];
};

export default useAxioSequre;