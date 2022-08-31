import React, {useEffect, useState} from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
import { BiChevronDown } from "react-icons/bi";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {toast} from 'react-toastify'



function CourseForm ({initialCourse}){
    const month = [
        'August', 'September', 'October', 'November', 'December'
      ]
      const status = ['Coming Soon', 'Available']
      const [dropdown, setDropdown] = useState(false)
      const [dropdown2, setDropdown2] = useState(false)
      const [avail, setAvail] = useState('Coming Soon');
      const [monthSelect, setMonthselect] = useState('August');
      const defaultCourse = {
        title: "",
        thumbnail: "",
        courseDesc: "",
        availMonth: "",
        courseStatus: avail,
        courseHighlight: ""
      };
      const [courseInfo, setCourseInfo] = useState({ ...defaultCourse });

      const [selectedThumbnailURL, setSelectedThumbnailURL] = useState("");

      useEffect(() => {
        setCourseInfo({...initialCourse});
      }, [initialCourse]);

      const handleEditor = (event, editor) => {
        const data = editor.getData()
        console.log(data)
      }

      const handleChange = ({ target }) => {
        const { value, name } = target;
    
        if (name === "thumbnail") {
          const file = target.files[0];
    
          if (!file.type?.includes("image")) {
            return toast.warn( "This is not an image!");
          }
    
          setCourseInfo({ ...courseInfo, thumbnail: file });
          return setSelectedThumbnailURL(URL.createObjectURL(file));
        }
        
        const newCourse = { ...courseInfo, [name]: value };
    
        setCourseInfo({ ...newCourse });
    
        localStorage.setItem("course", JSON.stringify(newCourse));
        console.log(newCourse)
      };

    

      const { title,
      thumbnail,
      courseDesc,
      availMonth,
      courseStatus,
      courseHighlight
     } = courseInfo;
    return (
        <div className='px-[15px] py-[30px] ' >
        <form action="" className='w-full'>
        <div className='flex items-center w-full justify-between p-[15px]'>
           <button type='reset' className='w-[125px] h-[40px] text-[#33658A] border border-[#33658A] bg-white rounded-[5px] flex items-center justify-center space-x-2'>
             <FaTimes/>
             <p className='font-lato text-[14px] font-[400]'>Cancel</p>
           </button>
           <button type='submit' className='w-[125px] h-[40px] bg-[#33658A] text-white rounded-[5px] flex items-center justify-center space-x-2'>
           <AiOutlineCheck/>
             <p className='font-lato text-[14px] font-[400]'>Save</p>
           </button>
           
         </div>
         <div className='w-full flex justify-between mt-[20px] px-[15px] gap-4'>
           <div className='flex-2'>
             <div>
               <label htmlFor="title" className='font-[700] font-raleway text-[18px]'> Course Title</label>
               <input type="text" 
                  name="title"
                  value={title}
                  onChange={handleChange}
                className='h-[38px] bg-[#FAFAFA] w-full mt-[5px] rounded-[3px] outline-none border px-[5px] font-lato text-[#333333] text-[16px] font-[400]'/>
             </div>
     
             <div className='py-[20px]'>
               <p className='font-[700] font-raleway text-[18px] mb-[5px]'>Course Description</p>
               <div >
               <CKEditor
               
               placeholder=""
               editor={ClassicEditor}
               onReady={editor => {
                 // You can store the "editor" and use when it is needed.
                 console.log('Editor is ready to use!', editor);
               }}
              //  name="courseDesc"
               value={courseDesc}
              //  onChange={handleChange}
               

              
             />
               </div>
             
             </div>
           </div>
         <div className='flex-1 '>
           <p className='font-[700] font-raleway text-[18px]'>Course Status</p>
         <div className="flex items-center justify-between gap-4 mt-[5px]">
           <div>
                 <div className="bg-[#FAFAFA] w-[150px] px-[10px] h-[40px] flex items-center justify-between cursor-pointer rounded-[5px]" onClick={(e)=> setDropdown(!dropdown)}>
                   <input className='font-lato font-[400]' name='courseStatus' value={courseStatus}/>
                   <BiChevronDown className='text-[25px]'/>
                 </div>
                 {
                   dropdown && (
                       <div className="absolute bg-[#FAFAFA] w-[150px] mt-[10px] rounded-[5px]">
                       {status.map((option, index)=> (
                           <div className="h-[40px] p-[10px] hover:bg-gray-100 cursor-pointer font-lato font-[400]"
                           onClick={(e) => {
                             setDropdown(!dropdown);
                             setAvail(option);
                           }}
                           key={index}>{option}</div>
                       ))}
                     </div>
                   )
                 }
               </div>
          {
           avail === 'Coming Soon' && (
             <div >
             <div className="bg-[#FAFAFA] w-[150px] px-[10px] h-[40px] flex items-center justify-between cursor-pointer rounded-[5px]" onClick={(e)=> setDropdown2(!dropdown2)}>
               <p className='font-lato font-[400]' value={availMonth} onChange={handleChange}>{monthSelect}</p>
               <BiChevronDown className='text-[25px]'/>
             </div>
             {
               dropdown2 && (
                   <div className="absolute bg-[#FAFAFA] w-[150px] mt-[10px] rounded-[5px]">
                   {month.map((option, index)=> (
                       <div className="h-[40px] p-[10px] hover:bg-gray-100 cursor-pointer font-lato font-[400]"
                       onClick={(e) => {
                         setDropdown2(!dropdown2);
                         setMonthselect(option);
                       }}
                       key={index}>{option}</div>
                   ))}
                 </div>
               )
             }
           </div>
           )
          }
          
           </div>
           <div className='mt-[20px]'>
             <p className='font-[700] font-raleway text-[18px]'>Course Image</p>
             <div>
         <div className="mt-[10px]">
           <input
             type="file"
             name="thumbnail"
             hidden
             value={thumbnail}
             id="thumbnail"
             onChange={handleChange}
           />
           <label htmlFor="thumbnail" className="cursor-pointer">
             {selectedThumbnailURL ? (
               <img
                 src={selectedThumbnailURL}
                 alt=""
                 className="w-[160px] h-[100px] shadow"
               />
             ) : (
               <div className="border-[2px] rounded-[5px] border-dashed w-[160px] h-[100px] aspect-video border-[#33658A] flex flex-col justify-center items-center">
                 <span className="text-[16px] font-lato font-[400]">Select Thumbnail</span>
                 <span className="text-[12px] font-lato font-[400]">Recommended size</span>
                 <span className="text-[12px] font-lato font-[400]">1280*720</span>
               </div>
             )}
           </label>
         </div>
         <div className='mt-[20px]'>
         <p className='font-[700] font-raleway text-[18px]'>Course Highlight</p>
         <div>
         {/* <CKEditor
               
               placeholder=""
               editor={ClassicEditor}
               onReady={editor => {
                 // You can store the "editor" and use when it is needed.
                 console.log('Editor is ready to use!', editor);
               }}
               
               name="courseHighlight"
              //  value={courseHighlight}
               onChange={handleEditor}
               

              
             /> */}
         </div>
     
         </div>
     
           </div>
         </div>
           
         </div>
         </div>
        </form>
        </div>
    )
}

export default CourseForm