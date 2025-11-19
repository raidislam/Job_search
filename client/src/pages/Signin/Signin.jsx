import Lottie from "lottie-react";
import registerAmnimation from "../../assets/lottiefiles/register.json";
import AuthContext from "../../context/AuthContext/AuthContext";
import { use, useContext } from "react";    

export default function Signin() {
    const {signinUser} = useContext(AuthContext);
    const handleSignin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signinUser(email,password)
        .then(res=>{
            console.log('Sign in')
        })
        .catch((err)=>console.log(err))
    }
  return (
     <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-4xl font-bold">Signin now!</h1>
          <form className="card-body" onSubmit={handleSignin}>
           <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
          </form>
        </div>
         <div className="text-center lg:text-left w-[500px]">
          <Lottie animationData={registerAmnimation} />
        </div>
      </div>
    </div>
  )
}
