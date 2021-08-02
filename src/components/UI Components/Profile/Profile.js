import { Avatar } from "@material-ui/core";
import React from "react";
import profile from "../../../assets/images/avatar.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));
const Profile = () => {
  const classes = useStyles();
  return (
    <div>
      {/* profile card */}
      <div className="bg-navbar rounded-md p-5 space-y-5">
        <section className="flex space-x-5 items-center">
          <Avatar src={profile} className={classes.large}></Avatar>
          <div>
            <h1 className="text-4xl text-lightGray font-medium">User Name</h1>
            <h4 className="text-lightGray">@username</h4>
          </div>
        </section>
        <section className="flex space-x-5 ">
          <div className="flex space-x-2">
            <p className="text-hardGray font-bold">0</p>
            <h4 className="text-sidebar">Following</h4>
          </div>
          <div className="flex space-x-2">
            <p className="text-hardGray font-bold">0</p>
            <h4 className="text-sidebar">Followers</h4>
          </div>
          <div className="flex space-x-2">
            <p className="text-hardGray font-bold">0</p>
            <h4 className="text-sidebar">Likes</h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
