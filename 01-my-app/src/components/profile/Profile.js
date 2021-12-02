import React from "react";
import "./profile.css";

const Profile = (props) => {
  const { avatar, name, location, shot, followers, following } = props;
  return (
    <div className="person-card">
      <div className="person-bg" style={{ backgroundImage: `url(${avatar})` }}>
        <div className="person-bg-transparent"></div>
      </div>
      <div className="person-content">
        <div className="person-avatar">
          <img src={avatar} />
        </div>
        <h3>{name}</h3>
        <h6>{location}</h6>

        <div className="person-stat">
          <div>
            {shot}
            <span>Shot</span>
          </div>
          <div>
            {followers}
            <span>Followers</span>
          </div>
          <div>
            {following}
            <span>Following</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
