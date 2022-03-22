import React from 'react'

const ProfileCard = ({writer}) => {
  return (
    <div className="container">


      <div className="card">
        <img src={`/images/${writer.avatar}.png`} alt="" width="100%" height="300px" />
        <div className="textGroup">
          <h3>{writer.name}</h3>
          <p>{writer.email}</p>
          <p>{writer.phone}</p>
        </div>
      </div>



  </div>
  )
}

export default ProfileCard