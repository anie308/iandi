import { useState } from "react";
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
      toast.success("Login Succesfull!");
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
    <div className="min-h-screen max-h-screen bg-gray-300 flex items-center justify-center ">
      <div className="w-full md:w-[350px] bg-primary shadow pt-[20px] pb-[30px]">
        {/* <div className="w-full flex justify-center py-[15px]">
          <img src={Logo} alt="logo" className="h-[50px] w-[130px] " />
        </div> */}
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
            {isLoading ? (
              <button
                type="button"
                className="w-full h-[45px] bg-[#33658A] flex items-center justify-center text-center"
                disabled
              >
                <svg
                  aria-hidden="true"
                  className="mr-2 w-[25px] h-[25px] animate-spin text-blue-200 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <p className=" text-white font-[22px] font-raleway">
                  Processing...
                </p>
              </button>
            ) : (
              <button
                type="submit"
                className="text-[22px] text-white font-raleway w-full flex items-center justify-center text-center h-[45px] bg-[#33658A]   cursor-pointer"
              >
                Login
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
