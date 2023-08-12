import React, { useContext } from 'react';
import useAxioSequre from '../../Hooks/useAxioSequre';
import { AuthContext } from '../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UserProfile = () => {
    const [axiosSequre] = useAxioSequre();
    const { user } = useContext(AuthContext);
    const { data: userprofile = [], } = useQuery(['userprofile'], async () => {
        const res = await axiosSequre.get(`/users/${user?.email}`)
        return res.data;
    });
    console.log(userprofile);
    return (
        <div>
            nissan
        </div>
    );
};

export default UserProfile;