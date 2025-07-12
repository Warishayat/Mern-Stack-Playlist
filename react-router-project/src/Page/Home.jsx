import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    
    <div>
        <h2>Welcome to the home page</h2>
        <p>This div is all about home</p>
        <button onClick={()=>navigate("/contact")}>Contact Page</button>
    </div>
  )
};

export default Home;