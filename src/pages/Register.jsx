import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

  const navigate = useNavigate()
  const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext)
  const [error, setError] = useState({})

  const handleSubmit = (e) =>{
     e.preventDefault();

    //  get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    if(password.length < 6){
      setError({ ...error, password:"password should be at least 6 character"});
      return;
    }

    console.log({name, email, photo, password})

    createNewUser(email,password)
    .then(result => {
      // Signed up 
      const user = result.user;
      setUser(user)
      updateUserProfile({displayName:name, photoURL:photo})
      .then(()=>{
          navigate("/")
      }).catch(err=>{
        console.log(err)
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      console.log(errorCode, errorMessage)
    });

  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
       <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">Register your account</h2>
      <form onSubmit={handleSubmit} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name='photo' type="text" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          {
              error.password && (
              <label className="label text-xs text-red-600">
              {error.password}
            </label>)
         }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-neutral rounded-none">Register</button>
        </div>
      </form>
      <p className="text-center font-semibold">
        Already Have an account? 
        <Link className="text-red-500" to="/auth/login"> Login</Link>
      </p>
    </div>
    </div>
  );
};

export default Register;