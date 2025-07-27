import { useState } from "react";
import { useForm } from "react-hook-form";
import './Login.css'
const Login = () => {
 const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

  function onSubmit(e){
    console.log(e)
  }
  return (
    <div className="Login-Page">
      <div className="Form-section">
         <h1 className="Login-Tite">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <label className="Email-label">Enter Your Email:</label>
        <input defaultValue="abc69@gmail.com" {...register("Email",{required:true})} className="Email-type" />
        <br />
        <label className="password">Enter your Password:</label>
        <input {...register("password", { required: true,})} className="password-type"/>
        <input type="submit" disabled={isSubmitting} value={loading ? "submitting" : "submit"} className="button"/>
      </form>
      </div>
    </div>
  );
};

export default Login;
