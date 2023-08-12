import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import loginanimation from '../../../assets/animation_ll1yt389.json';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import Sociallogin from '../SocialLogin/Sociallogin';
const Login = () => {
  // Authcontext import auth info and 2 hokks
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState();
  // visible and hidden function implement password field
  const [show, setShow] = useState();
  const handleShow = () => {
    setShow(!show);
  };
  /// login form data collect and user login
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    const email = data?.email;
    const password = data?.password;
    signIn(email, password)
      .then(result => {
        const user = result.user;
        reset();
        console.log(user);
        Swal.fire({
          icon: 'success',
          title: 'Login successfully.',
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
      })
      .catch(err => {
        setError(err.message);
        console.log(err.message);
      })
  };


  return (
    <div className='flex flex-col lg:flex-row justify-center items-center px-2 lg:gap-5 gap-5 lg:px-20'>
      {/* Login div start */}
      <div className='w-full lg:px-10'>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:p-10 p-3 border border-green-500 bg-white rounded-lg text-black">
          <h3 className='text-2xl text-center font-bold mb-5'>Login Here</h3>
          {/* Email Inpurt Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register("email", { required: true })} placeholder="Enter your email" className="input input-bordered" />
            {errors.email && <span className='text-rose-500 animate-pulse'>please provide your email</span>}
          </div>
          {/* Password INput Field */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={show ? 'text' : "password"} {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered" />
            <span onClick={handleShow} className='absolute top-12 right-4 text-[22px]'>{show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
            {errors.password && <span className='text-rose-500 animate-pulse'>please provide your password</span>}

          </div>
          {/* submit button */}
          <div className="form-control mt-6 mb-4">
            <input type="submit" value="Loigin" className="btn bg-green-500 text-[20px] border-0 text-white" />
          </div>
          {error && <p className='text-center text-error mb-2'>{error}</p>}
          <p className='text-center'>Don't have an account? <Link to='/signup' className='text-green-500 underline'>Create an account</Link></p>
        </form>
        {/* social login google and facebook */}
        <Sociallogin></Sociallogin>
      </div>
      {/* Login div End */}
      <div className=' w-full flex justify-center items-center'>
        <div className='lg:py-24'>
          <Lottie className='w-full' animationData={loginanimation} loop={true} />;
        </div>
      </div>

    </div>

  );
};

export default Login;
