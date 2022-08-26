import { useState } from "react";
import Logo from "../../assets/logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../../services/authApi";
import { useEffect } from "react";

function Login() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleVisibility = () => {
    setVisible((prevState) => !prevState);
  };

  const { username, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard/home");
      // toast.success("Login Succesfull" )
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username, password };
    dispatch(login(userData));
  };

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
        <form
          action=""
          className="w-full p-[10px] md:px-[30px]"
          onSubmit={handleSubmit}
        >
          <div className="w-full space-y-1">
            <label
              htmlFor="username"
              className="text-[18px] font-raleway font-[600]"
            >
              Username
            </label>
            <div>
              {" "}
              <input
                required
                type="text"
                name="username"
                placeholder=""
                value={username}
                className="w-full h-[45px] outline-none pl-[10px] border border-gray-600"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="w-full space-y-1 mt-[20px]">
            <label
              htmlFor="username"
              className="text-[18px] font-raleway font-[600]"
            >
              Password
            </label>
            <div className="relative">
              <input
                required
                type={visible ? "text" : "password"}
                placeholder=""
                name="password"
                value={password}
                onChange={onChange}
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
            <button
              type="submit"
              className="w-full flex items-center justify-center text-center h-[45px] bg-[#33658A]   cursor-pointer"
            >
             {isLoading ?  (
              <div className="flex justify-center items-center">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-white" role="status">
                <span className="hidden visually-hidden">Loading...</span>
              </div>
            </div>
             ) : (
              <span className="text-[22px]">Login</span>
             )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
