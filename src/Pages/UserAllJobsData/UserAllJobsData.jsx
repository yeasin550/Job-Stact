import React from "react";
import useAxioSequre from "../../Hooks/useAxiosSequre";
import JobPost from '../../Components/JobPost/JobPost';
import { useQuery } from "@tanstack/react-query";

const UserAllJobsData = () => {
  const [axiosSequre] = useAxioSequre();
    const { data: userAllJobsPosts = [] } = useQuery(["userAllJobsPosts"], async () => {
        const res = await axiosSequre.get("/job");
      return res.data;
    }
  );
  console.log(userAllJobsPosts);
  return (
    <div>
      <h1 className="text-center my-5  font-semibold text-4xl text-green-500">
        Different Type of Jobs!
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mx-5 gap-5">
        {userAllJobsPosts?.map((posts) => (
          <JobPost key={posts?._id} posts={posts} />
        ))}
      </div>
    </div>
  );
};

export default UserAllJobsData;
