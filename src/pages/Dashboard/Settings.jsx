import React from 'react'

function Settings() {
  const handleSubmit = () => {
    alert('submitted')
  }
  return (
    <div className='p-[20px]'>
      <form className='flex justify-between ' onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Current Password</label>
        </div>
        <div></div>
      </div>
     <div>
      <button type='submit'>Save</button>
     </div>
      </form>
    </div>
  )
}

export default Settings