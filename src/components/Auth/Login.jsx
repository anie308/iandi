import { useState } from "react";
import Logo from "../../assets/logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {useNavigate} from 'react-router-dom'



function Login() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleVisibility = () => {
    setVisible((prevState) => !prevState);


  };

  const handleSubmit = (e ) =>{
    e.preventDefault()  


    navigate('/dashboard/home')
  }

  return (
    <div className="min-h-screen max-h-screen bg-gray-300 flex items-center justify-center">
      <div className="w-full md:w-[400px] bg-primary shadow pt-[20px] pb-[35px]">
        <div className="w-full flex justify-center py-[15px]">
          <img src={Logo} alt="logo" className="h-[50px] w-[130px] " />
        </div>
        <div className="w-full py-[10px]">
          <p className="font-raleway font-[500] text-center text-[20px]">
            Welcome! <br /> Login to proceed
          </p>
        </div>
        <form action="" className="w-full p-[10px] md:px-[30px]" onSubmit={(e) => handleSubmit(e)}>
          <div className="w-full space-y-1">
            <label htmlFor="username" className="text-[18px] font-raleway font-[600]">
              Username
            </label>
            <div>
              {" "}
              <input
              required  
                type="text"
                placeholder=""
                value={name}
                className="w-full h-[45px] outline-none pl-[10px] border border-gray-600"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full space-y-1 mt-[20px]">
            <label htmlFor="username" className="text-[18px] font-raleway font-[600]">
              Password
            </label>
            <div className="relative">
              <input
              required
                type={visible ? "text" : "password"}
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}

                className="w-full h-[45px] outline-none pl-[10px] border border-gray-600 "
              />
               {visible ? (
                <AiOutlineEyeInvisible
                  className="absolute top-[12px] right-[10px] text-[20px] cursor-pointer"
                  onClick={handleVisibility}
                />
              ) : (
                <AiOutlineEye
                  className="absolute top-[12px] right-[10px] text-[20px] cursor-pointer"
                  onClick={handleVisibility}
                />
              )}
            </div>
          </div>
          <div className="w-full mt-[30px]">
            <button type='submit' className="w-full text-center h-[45px] bg-[#33658A] text-white text-[22px] cursor-pointer">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
