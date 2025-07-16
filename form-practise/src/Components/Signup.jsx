import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  function onSubmit(data)
  {
    console.log("SIgnup data is here");
    console.log(data);
  }
  const navigate = useNavigate();
  return (
    <div>
        <h1>Signup Form here</h1>

    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            Enter Name
        </label>
        <input {...register("name")} placeholder="Waris"/>
        <label>Emai</label>
        <input {...register("email")} placeholder="abc@gmail.com"/>
        <br />
        <label> Password</label>
        <input {...register("password")} placeholder="******"/>
        <br />
        <br />
        <button onClick={()=>navigate("/login")}>Press to move on login</button>
        <input type="submit" />
    </form>


    </div>
  )
};

export default Signup;