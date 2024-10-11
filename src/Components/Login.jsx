import { useContext } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
    const { signInUser,googleSignInUser,setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                const currentUser = result.user;
                 e.target.reset();
                 navigate('/orders')
                console.log(currentUser,'login successfully');
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handelGoogleSignIn=()=>{
        googleSignInUser()
        .then(result =>{
            setUser(result.user)
            
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <div className="flex justify-center flex-col items-center">
            <h1 className="text-3xl font-sans mt-4">Login Now</h1>
            <div className="card mt-2 bg-base-100 lg:w-[30%] w-[90%] shrink-0 shadow-2xl p-8">
                <form onSubmit={handelLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required />
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
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center">New hire ? Please<Link to="/register"><button className="btn btn-link">Register</button></Link></p>
                <button onClick={handelGoogleSignIn} className="btn btn-ghost">Google</button>
            </div>
        </div>
    )
}

export default Login