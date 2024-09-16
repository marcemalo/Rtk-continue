import React from 'react';
import { useProfileQuery } from '../../redux/api/authProfil';

const Profile = () => {

  const { data } = useProfileQuery();

  return (
    <div className="profile">
  {data && data.payload && (
    <div className="profile__card">
      <div className="profile__image-container">
        <img className="profile__image" src={data.payload.photo_url} alt="Profile" />
      </div>
      <div className="profile__details">
        <h1 className="profile__name">{data.payload.username}</h1>
      </div>
    </div>
  )}
</div>

  );
};

export default Profile;