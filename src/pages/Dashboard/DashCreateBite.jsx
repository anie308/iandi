import React from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
//  import { default as api } from "../../redux/apiSlice";

import BiteForm from '../../components/DashComponents/Forms/BiteForm'
import { useEffect } from 'react';

function DashCreateBite() {
  // const [courseInfo, setCourseInfo] = useState(null)
  // const [addBite] = api.useAddBiteMutation();
  const navigate = useNavigate()

  const handleSubmit = async (data) => {
  //  const {error, course} =  await addBite(data).unwrap()
  //  if(error) return toast.error(error.message)

    // navigate(`/dashboard/update-bite/${bite.slug}`)
  }

  useEffect(()=> {
    const result = localStorage.getItem('bitePost');
    if(!result) return;

    // const oldPost = JSON.parse(result);
    // setPostInfo({...oldPost})
  })
  return (
    <div></div>
    // <BiteForm onSubmit={handleSubmit} />
  )
}

export default DashCreateBite