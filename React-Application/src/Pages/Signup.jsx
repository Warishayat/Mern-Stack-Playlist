import { useState } from "react";
import { useForm } from "react-hook-form";
import './Signup.css'

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting},
      } = useForm();
    
      function onSubmit(e){
        console.log(e)
      }
  return (
    <div className="Signup-Page">
      <div className="Form-section">
         <h1 className="Signup-Tite">Sign-Up</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <label className="Email-label">Enter Your Email:</label>
        <input defaultValue="abc69@gmail.com" {...register("Email",{required:true})} className="Email-type" />
        <br />
        <label>Enter your Full name</label>
        <input {...register("fullname", { required: true,})} className="fullname"/>
        <label className="password">Enter your Password:</label>
        <input {...register("password", { required: true})} className="password-type"/>
        <input type="submit" disabled={isSubmitting} value={loading ? "submitting" : "submit"} className="button"/>
      </form>
      </div>
    </div>
  )
};

export default Signup;