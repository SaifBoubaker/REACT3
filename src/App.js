import React from "react";
import Profile from "./Profile/pro";
import Card from "./Profile/Card";

function App() {
  const infos = {
    fullname: "Boubaker Saif",
    bio: "On a mission to learn JS",
    profession: "Reactjs/Nodejs Web developper",
  };
  const handlename = () => {
    alert(infos.fullname);
  };
  return (
    <div>
      <Card class >
      <Profile
        fullname={infos.fullname}
        bio={infos.bio}
        profession={infos.profession}
        fun={handlename}
      ></Profile>
      </Card>
    </div>
  );
}

export default App;
