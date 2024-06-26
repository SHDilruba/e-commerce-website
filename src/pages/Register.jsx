import { Link } from "react-router-dom";
import { useState } from "react";
import GoogleLogin from "../Components/LoginRegistration/GoogleLogin";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [passMatch, setPassMatch] = useState(true);
  const {createUser} = useAuth();
 const handleSubmit = (e) => {
   e.preventDefault();

   const form = e.target;
   const name = form.name.value;
   const email = form.email.value;
   const password = form.password.value;
   const confirm_password = form.confirm_password.value;

   if (password !== confirm_password) {
     setPassMatch(false);
   }
   console.log(name, email, password, confirm_password);
   if (password === confirm_password){
    createUser(email, password)
   }
  };

 return (
   <div className="hero min-h-screen bg-base-200">
     <div className="hero-content grid grid-cols-2 w-full mx-auto">
       <div className="text-center lg:text-left">
         <h1 className="text-5xl font-bold">Register now!</h1>
         <p className="py-6">
           Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
           excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
           a id nisi.
         </p>
       </div>
       <div className=" card shadow-2xl bg-base-100 max-w-lg">
         <form onSubmit={handleSubmit} className="card-body  ">
           <div className="form-control">
             <label className="label">
               <span className="label-text">Name</span>
             </label>
             <input
               type="name"
               name="name"
               placeholder="name"
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input
               type="email"
               name="email"
               placeholder="email"
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Password</span>
             </label>
             <input
               type="password"
               name="password"
               placeholder="password"
               className="input input-bordered"
               required
             />
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Confirm Password</span>
             </label>
             <input
               type="password"
               name="confirm_password"
               placeholder="password"
               className="input input-bordered"
               required
             />
           </div>  
           {!passMatch && (
             <div className="my-2">
               <p className="text-red-500">Password do not match!</p>
             </div>
           )}
           <div className="form-control mt-6">
             <input
               type="submit"
               value="Register"
               className="btn bg-red-500 text-white"
             />
           </div>
           <div className="mt-6">
             <GoogleLogin />
           </div>
           <div className="form-control mt-6">
             <p className="text-center">
               Already have an account ?{" "}
               <Link to={"/login"} className="text-red-500">
                 Login
               </Link>
             </p>
           </div>
         </form>
         <div className="  w-full ">
         </div>
       </div>
     </div>
   </div>
 );
};

export default Register;