
import {useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  function onSubmit(data){
    console.log("Data");
    console.log(data);
  }
  const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Enter your Email</label>
        <br />
        <input {...register("Email",{required:true})}/>
        <br />
        <br />
        <label> Password</label>
        <input {...register("password",{required:true})}/>
        <br />
        <br />
        <input type="Submit"/>
    </form>
  )
};

export default Login;