import Lottie from "lottie-react"
import registerAmnimation from "../../assets/lottiefiles//register.json"
import AuthContext from "../../context/AuthContext/AuthContext"
import {  useContext } from "react"
import SocialLogin from "../shared/SocialLogin"
function Register() {
  const { createUser } = useContext(AuthContext)

  const handleRegistration = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const user = { name, email, password }
    console.log(user)

    // Password validation
    if (password.length < 6 && !/(?=.*[A-Z])/.test(password)) {
      // show password validation error
      console.error("Password does not meet the criteria")
      return
    }
    // show password validation error

    createUser(email, password)
      .then((res) => {
        console.log(res.user)
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-[500px]">
          <Lottie animationData={registerAmnimation} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-4xl font-bold">Register now!</h1>
          <form className="card-body" onSubmit={handleRegistration}>
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Your Name"
              />
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
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <SocialLogin/>
        </div>
      </div>
    </div>
  )
}

export default Register
