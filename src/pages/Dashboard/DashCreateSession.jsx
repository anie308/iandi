import React from 'react'
import SessionForm from '../../components/DashComponents/Forms/SessionForm';
import {default as  api} from '../../services/apiSlice'


function DashCreateSession() {
  const [createSession] = api.useCreateSessionMutation();
  const handleSubmit = async (data) => {
    createSession(data)
    console.log(data)
  }

  return (
    <SessionForm onSubmit={handleSubmit}/>
  )
}

export default DashCreateSession