import React from 'react'
import Profile from '../profile/Index'
function ProfilePage() {
  const user=localStorage.getItem('user');
  return (
    <div>
     <Profile user={user}/>
    </div>
  )
}

export default ProfilePage