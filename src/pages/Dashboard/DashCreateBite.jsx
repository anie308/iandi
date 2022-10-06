import React from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {default as  api} from '../../services/apiSlice'

import BiteForm from '../../components/DashComponents/Forms/BiteForm'
import { useEffect } from 'react';

function DashCreateBite() {
  // const [courseInfo, setCourseInfo] = useState(null)
  const [createBites] = api.useCreateBitesMutation();
  const navigate = useNavigate()

  const handleSubmit = async (data) => {
    createBites(data)
    console.log(data)
  }

  useEffect(()=> {
    const result = localStorage.getItem('bitePost');
    if(!result) return;

    // const oldPost = JSON.parse(result);
    // setPostInfo({...oldPost})
  })
  return (
   
    <BiteForm onSubmit={handleSubmit} />
  )
}

export default DashCreateBite