import { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Login() {
//   const [user, setUser] = useState([""]);
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  const handleSubmit = () =>{
    alert('Login Successful');
  }

  return (
    <div className="min-h-screen max-h-screen bg-gray-300 flex items-center justify-center">
      <div className="w-[400px] bg-primary shadow py-[20px]">
        <div className="w-full flex justify-center py-[15px]">
          <img src={Logo} alt="logo" className="h-[50px] w-[130px] " />
        </div>
        <div className="w-full py-[10px]">
          <p className="font-raleway font-[500] text-center text-[20px]">
            Welcome! <br /> Login to proceed
          </p>
        </div>
        <form action="" className="w-full px-[30px]" onSubmit={handleSubmit}>
          <div className="w-full space-y-1">
            <label htmlFor="username" className="text-[18px]">
              Username
            </label>
            <div>
              {" "}
              <input
              required  
                type="text"
                placeholder=""
                className="w-full h-[40px] outline-none pl-[10px] border"
              />
            </div>
          </div>
          <div className="w-full space-y-1 mt-[20px]">
            <label htmlFor="username" className="text-[18px]">
              Password
            </label>
            <div className="relative">
              <input
              required
                type={visible ? "text" : "password"}
                placeholder=""
                className="w-full h-[40px] outline-none pl-[10px] border"
              />
               {visible ? (
                <AiOutlineEyeInvisible
                  className="absolute top-[10px] right-[10px] text-[20px] cursor-pointer"
                  onClick={handleVisibility}
                />
              ) : (
                <AiOutlineEye
                  className="absolute top-[10px] right-[10px] text-[20px] cursor-pointer"
                  onClick={handleVisibility}
                />
              )}
            </div>
          </div>
          <div className="w-full mt-[20px]">
            <button className="w-full text-center h-[42px] bg-[#33658A]">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
