import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { default as api } from "../../services/apiSlice";

function CourseRegisterSection() {
  const navigate = useNavigate();
  const [registered] = api.useRegisterMutation();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    occupation: "",
    country: "",
  });

  const { fullname, email, occupation, country } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registeredData = { fullname, email, country, occupation };
      if (!fullname.trim()) {
        toast.warn("Full Name field is reqired");
      } else if (!email.trim()) {
        toast.warn("Email field is required");
      } else if (!occupation.trim()) {
        toast.warn("Occupation field is required");
      } else if (!country.trim()) {
        toast.warn("Country field is required");
      } else {
        await registered(registeredData).unwrap();
        navigate("/course/register/success");
      }
    } catch (err) {
      toast.error(`${err.data.error}!`);
    }
  };

  // const handleClick = () => {
  //     navigate('/course/register/success')
  // }
  return (
    <div className="mt-[80px] flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <p className="font-[800] font-raleway text-[28px] md:text-[36px] text-[#232C38] text-center">
          One Account for All <br className="hidden md:block" /> Development
          Courses
        </p>
        <p className="font-[400] font-lato text-[20px] mt-[5px] md:mt-[20px]">
          Free until 30 August 2022
        </p>
      </div>
      <div className="flex flex-col p-[20px] my-[50px] items-left w-full md:w-[420px] ">
        <form action="" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="flex flex-col items-start space-y-1 w-full">
              <div>
                <label htmlFor="name" className="font-lato">
                  First and last name <sup></sup>
                </label>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  name="fullname"
                  value={fullname}
                  placeholder="Your first and last name"
                  className="border-b pb-[5px] outline-none w-full"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-1 w-full">
              <div>
                <label htmlFor="email" className="font-lato">
                  Email<sup></sup>
                </label>
              </div>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Your personal email address"
                  className="border-b pb-[5px] outline-none w-full"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-1">
              <div>
                <label htmlFor="name" className="font-lato">
                  Occupation
                </label>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="What do you do for work?"
                  className="border-b pb-[5px] outline-none w-full"
                  name="occupation"
                  value={occupation}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex flex-col items-start space-y-1">
              <div>
                <label htmlFor="name" className="font-lato">
                  Residing Country
                </label>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Which country are you at?"
                  className="border-b pb-[5px] outline-none w-full"
                  name="country"
                  value={country}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-[50px]">
            <button
              className="bg-[#33658A] text-white text-[18px] py-[8px] w-full rounded-[10px] font-lato"
              type="submit"
            >
              Get my free account now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CourseRegisterSection;
