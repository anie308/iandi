import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Thumbnail from "../../assets/thumbnail.png";
import CourseListing from '../Lisitings/CourseListing'
import { IoTimeOutline } from "react-icons/io5";
import '../style.css'
import { useBitesQuery } from "../../services/bitesApi";

function BiteDetailSection() {
  const { slug } = useParams();
  const { data } = useBitesQuery();
  const bites = data?.posts;
  const [bite, setBite] = useState(null)

  useEffect(()=> {
    const bite = bites.find((post) => post.slug === slug);
    if(bite){
      setBite(bite)
    }
  }, [slug, bites])
  return (
    <div className="">
     <div>
     {bite ? (
         <div className="flex flex-col md:flex-row md:px-[100px] py-[50px] justify-evenly ">
          <div className="md:border-r px-[10px] md:pr-[40px] border-[#DCDCDC]">
            <div className="mb-[20px]">
              <p className="font-[400] text-[14px] md:text-[16px] font-montserrat text-[#F6C042]">
                BITE-SIZED READS
              </p>
              <p className="font-[800] font-raleway text-[24px] md:text-[36px]">
                {bite.title}
              </p>
              <p className="w-[44px] h-[5px] bg-[#F6C042] "></p>
            </div>
            <div className="md:min-h-[400px] w-full  md:w-[650px]">
              <img
                src={bite.thumbnail || Thumbnail}
                alt=""
                className=" w-full h-[200px] md:min-h-[400px] rounded-[10px] object-cover"
              />
            </div>
            <div className="mt-[20px] prose font-raleway">
              
              
                {bite.content}
              
            </div>
          </div>
          <div className="md:px-[20px] mt-[50px] md:mt-0">
            <div>
              <p className="font-[800] md:font-[400] font-montserrat text-[16px] md:uppercase px-[10px] md:p-0">
              What others are reading
              </p>
            </div>
            <div className="flex flex-row md:flex-col gap-6 mt-[10px] md:mt-[30px] overflow-auto shit px-[20px]">
              {bites.map((bite) => (
                <Link to={`/bites/${bite.slug}`} key={bite.id} replace>
                  <div className="h-[180px] md:h-full min-w-[264px] md:min-w-[410px] md:max-w-[410px] border flex flex-col md:flex-row justify-between md:justify-start rounded-[12px]">
                    <div className="hidden md:block">
                      <img
                        src={Thumbnail || Thumbnail}
                        alt=""
                        className="h-full md:h-[100px] min-w-[120px] object-cover rounded-l-[12px] max-w-[120px]"
                      />
                    </div>
                    <div className="p-[10px] h-full">
                      <div>
                        <p className="font-raleway text-[17px] md:text-[12px]  font-[700] break-words">
                          {bite.title}
                        </p>
                      </div>
                      <div className="flex items-center mt-[20px]">
                        <IoTimeOutline className="text-[14px] md:text-[18px]" />
                        <p className="text-[12px] md:text-[14px]">
                          {Math.ceil(
                            bite.content.trim().split(/\s+/).length / 275
                          )}{" "}
                          min{" "}
                        </p>
                      </div>

                    </div>
                    <div className="block md:hidden">
                        <Link  to={`/bites/${bite.slug}`}>
                          <p className="bg-[#F6C042] text-white w-full text-center py-[15px] rounded-b-[10px]">Read Now</p>
                        </Link>
                      </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
       
      ) : (
        <div className="h-full font-[700] font-raleway text-[25px] w-full text-center">
         Bite Not Found!
        </div>
      )}
     </div>
     <div className='px-[10px] md:px-[70px] mt-[40px]'>
      <p className="font-[800] break-words text-[24px] font-raleway py-[15px]">In-depth learning at your own pace</p>
      <CourseListing/>
     </div>
    </div>
  );
}

export default BiteDetailSection;
