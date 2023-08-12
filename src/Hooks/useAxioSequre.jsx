import axios from 'axios';

const axiosSequre = axios.create({
    baseURL: 'http://localhost:5000',
});

const useAxioSequre = () => {

    return [axiosSequre];
};

export default useAxioSequre;