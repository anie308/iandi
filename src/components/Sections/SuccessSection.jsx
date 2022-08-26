import React from 'react'
import '../style.css'

function SuccessSection() {
  return (
    <div className='px-[15px] md:px-[100px] my-[20px]'>
        <p className='text-[#333333] font-[800] text-[20px] font-raleway'>Tips for a successful session</p>
        <div className='mt-[20px] shit flex flex-row items-center justify-between overflow-y-auto gap-4 lg:grid lg:grid-cols-4'>
            {
                tipArr.map(({title, content})=> (
                    <div className='flex flex-col bg-[#EBEEF5] p-[20px] rounded-[12px] space-y-5 min-h-[200px] max-h-[200px] max-w-[264px] min-w-[264px]'>
                        <div className='font-[700] font-raleway text-[16px]'>{title}</div>
                        <div className='text-[14px] font-lato font-[400]'>{content}</div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SuccessSection

const tipArr = [
    {
        title:"How to prepare for your first meeting",
        content: "Think about the questions and topics you’d like to discuss. If you’d like to work with our coach on long term goals, do set aside some time  to discuss each other’s expectations."
    },
    {
        title:"What will be discussed",
        content: "You can discuss your goals, challenges, recent successes, or specific topics in the classes you need help with - it’s completely up to you."
    },
    {
        title:"Be on time",
        content: "You will receive a calendar invitation and a reminder 30 minutes before your session. Get off to a good start by showing up on time."
    },
    {
        title:"Stay connected!",
        content: "After your session, don’t be a stranger! Keep your mentor updated on your progress - they are more invested in your success than you think."
    },
]