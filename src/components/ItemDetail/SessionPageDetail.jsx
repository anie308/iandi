import React, { useState } from "react";
import { faqArr } from "../../data";
import Thumbnail from "../../assets/thumbnail2.png";
import { Link } from "react-router-dom";
import { BsCaretDown } from "react-icons/bs";
import CourseListing from "../Lisitings/CourseListing";
import { default as api } from "../../services/apiSlice";



function SessionPageDetail() {
  const { data, error, isLoading, isSuccess } = api.useSessionsQuery();
  const sessions = data?.sessions;
    const [more, setMore] = useState(3)
    const [faq, setFaq] = useState(null);
    const toggle = (i) => {
     if(faq === i){
      return setFaq(null);
     }
       setFaq(i);
    }
  return (
    <div className="mt-[50px] px-[15px]">
      <div className="flex flex-col items-center w-full justify-center ">
        <p className="font-[800] font-raleway text-[32px] ">Live Sessions</p>
        <p className="font-[400] font-lato text-[16px] mt-[10px] text-center">
          Stay updated, stay inspired - even if you’re short on time.
        </p>
      </div>
     <div className="flex flex-col items-center justify-center w-full">
     {isLoading &&<div className='mt-[20px] h-[100px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center'>Loading...</div> }
        {error && <div className='mt-[20px] h-[100px] w-full bg-gray-200 rounded-[10px] font-raleway font-[700] text-[20px] flex items-center justify-center'>Something went wrong </div>}
        {isSuccess && (
          <div className="w-fit mt-[40px] grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-6">
          {
              sessions.slice(0,more)
              .map(({title, id, createdAt, slug}) =>(
                  <div className="min-w-[320px] max-w-[320px] h-[350px] min-h-[350px]   max-h-[420px]   flex flex-col   rounded-[15px] bg-primary justify-between" key={id}>
                  <div className="w-full">
                    <div>
                      <img
                        src={Thumbnail}
                        alt="thumbnail"
                        className="h-[180px] rounded-t-[20px] w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full bg-primary px-[10px]">
                    <div className="py-[5px] text-left font-[700] font-raleway text-[16px] ">
                      { title.length > 40 ? `${title.substring(0, 20)}...` : title }
                    </div>
                    <div className=" pb-[20px] text-lato text-[14px] md:text-[16px] flex items-center ">
                      <span> {createdAt}</span>
                    </div>
                  </div>
                  <div className="bg-[#EB6D74] py-[15px] flex items-center justify-center rounded-b-[15px] cursor-pointer">
                    <Link
                      to={`/sessions/${slug}`}
                      className="text-lato text-[16px] text-white"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
          }
          
          </div> 
        )}
    
      <div className="w-full flex items-center justify-center mt-[30px]">
        <button className="border border-[#F6C042] text-[#F6C042] font-[400] text-[16px] font-lato px-[15px] py-[10px] rounded-[10px]" onClick={()=> setMore(more + 3)}>Load More</button>
      </div>
     </div>
     <div className="mt-[100px] flex flex-col justify-center items-center">
        <div className="mb-[30px] md:mb-[50px]">
          <p className="font-[800] font-raleway text-[20px]  md:text-[32px] ">
            Frequently Asked Questions
          </p>
        </div>
        {faqArr.slice(5,8)
        .map((item, i) => (
          <div className="my-[10px] w-full md:w-[960px] " onClick={() => toggle(i)} key={item.question}>
            <div className=" border flex gap-3 items-center justify-between p-[10px] md:p-[20px]  cursor-pointer ">
              <p className="font-[400]  font-lato text-[16px] md:text-[20px]">
                {item.question}
              </p>
              <BsCaretDown />
            </div>
            <div className={`${faq === i ? 'h-full p-[20px]' : 'h-0 p-0'} overflow-hidden transition-all break-words`}>
              <p className="">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='px-[10px] md:px-[70px] mt-[40px]'>
      <p className="font-[800] break-words text-[24px] font-raleway py-[15px]">In-depth learning at your own pace</p>
      <CourseListing/>
     </div>
    </div>
  );
}

export default SessionPageDetail;


 
