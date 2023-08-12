import React from "react";
import {
  FaBeer,
  FaHeadset,
  FaMicrochip,
  FaPaperPlane,
  FaSearch,
  FaThumbsUp,
  FaUser,
} from "react-icons/fa";
const ChooseWork = () => {
  return (
    <div>
      <div className="bg-[#F1F7F4]">
        <div className="grid lg:grid-cols-2">
          <div className="text-center block mt-[190px] m-10">
            <h1 className="text-4xl mb-3 text-black font-bold">
              Choose Your Work
            </h1>
            <p className="text-[#777] text-xl mb-5 ml-12">
              Find jobs on the work that suits you the <br />{" "}
              <span className="mr-[300px]">most.</span>
            </p>
            <button className="btn text-white bg-green-500 hover:bg-black mr-[150px]">
              View More Jobs
            </button>
          </div>
          <div>
            <div className="grid lg:grid-cols-3 my-[50px] pr-[100px]">
              <div className="text-center border-r border-solid border-gray-300 border-b mt-12">
                <div className="mr-[20px]">
                  <div className="ml-[70px] mb-2">
                    <span>
                      <FaUser className="text-2xl"></FaUser>
                    </span>
                  </div>
                  <h3 className="text-black hover:text-green-400 text-xl mb-2">
                    Register
                  </h3>
                  <p className="text-[#777] mb-4">
                    Create a account as Employer or a Candidate for free.
                  </p>
                </div>
              </div>
              <div className="text-center border-r border-solid border-gray-300 border-b mt-12">
                <div className="mx-5">
                  <div className="ml-[60px] mb-2">
                    <span>
                      <FaSearch className="text-2xl"></FaSearch>
                    </span>
                  </div>
                  <h3 className="text-black hover:text-green-400 text-xl mb-2">
                    Search
                  </h3>
                  <p className="text-[#777] mb-4">
                    Browse throught positions to find the right job for you.
                  </p>
                </div>
              </div>
              <div className="text-center border-solid border-gray-300 border-b mt-12">
                <div className="mx-5">
                  <div className="ml-[60px] mb-2">
                    <span>
                      <FaPaperPlane className="text-2xl"></FaPaperPlane>
                    </span>
                  </div>
                  <h3 className="text-black hover:text-green-400 text-xl mb-2">
                    Apply Jobs
                  </h3>
                  <p className="text-[#777] mb-4">
                    Apply to a job with your resume and change your Career.
                  </p>
                </div>
              </div>
              <div className="text-center border-r border-solid border-gray-300 mt-12">
                <div className="mx-5">
                  <div className="ml-[60px] mb-2">
                    <span>
                      <FaMicrochip className="text-2xl"></FaMicrochip>
                    </span>
                  </div>
                  <h3 className="text-black hover:text-green-400 text-xl mb-2">
                    Creative Technologies
                  </h3>
                  <p className="text-[#777] mb-4">
                    Gain a business in the most advanced IoT solutions.
                  </p>
                </div>
              </div>
              <div className="text-center border-r border-solid border-gray-300  mt-12">
                <div className="mx-5">
                  <div className="ml-[60px] mb-2">
                    <span>
                      <FaThumbsUp className="text-2xl"></FaThumbsUp>
                    </span>
                  </div>
                  <h3 className="text-black hover:text-green-400 text-xl mb-2">
                    Top Rated Companies
                  </h3>
                  <p className="text-[#777] mb-4">
                    Find The Best Top Rated Companies in your Local area.
                  </p>
                </div>
              </div>
              <div className="text-center border-solid border-gray-300 mt-12">
                <div className="mx-5">
                  <div className="ml-[55px] mb-2">
                    <span>
                      <FaHeadset className="text-2xl"></FaHeadset>
                    </span>
                  </div>
                  <h3 className="text-black hover:text-green-400 text-xl mb-2">
                    24/7 Customer Support
                  </h3>
                  <p className="text-[#777] mb-4">
                    self-service banking extending cash in you band.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseWork;
