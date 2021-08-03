import { Avatar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import profile1 from "../../../assets/images/avatar.png";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { FaApple } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));
const Setting = () => {
  const classes = useStyles();
  const [name, setName] = useState("User Name");
  const [userName, setUserName] = useState("User Name");
  const [openEdit, setOpenEdit] = useState(false);
  const [profile, setProfile] = useState();

  const editUsername = (e) => {
    setUserName(e.target.value);
  };

  const cancelEdit = () => {
    setOpenEdit(false);
  };

  const updateEdit = () => {
    setOpenEdit(false);
    setName(userName);
  };

  const reader = new FileReader();
  const profileUpload = (e) => {
    let files = e.target.files;
    if (files[0]) {
      reader.readAsDataURL(files[0]);
      reader.addEventListener("error", () => {
        console.error(`Error occurred reading file: ${files.name}`);
      });
      reader.onload = (e) => {
        let file = e.target.result;
        setProfile(file);
        // set profile to send in server base64
        // setSendProfile(files[0]);
      };
    }
  };
  // connect with social media
  const [google, setGoogle] = useState(false);
  const connectMedia = (e) => {
    e.preventDefault();
    setGoogle(!google);
    if (google === true) {
      alert("disconnected successfully");
    } else alert("connected successfully");
  };
  const [facebook, setFacebook] = useState(false);
  const connectMediaFacebook = (e) => {
    e.preventDefault();
    setFacebook(!facebook);
    if (facebook === true) {
      alert("disconnected successfully");
    } else alert("connect successfully");
  };
  const [apple, setApple] = useState(false);
  const connectMediaApple = (e) => {
    e.preventDefault();
    setApple(!apple);
    if (apple === true) {
      alert("disconnected successfully");
    } else alert("connected successfully");
  };
  const [phone, setPhone] = useState(false);
  const connectMediaPhone = (e) => {
    e.preventDefault();
    setPhone(!phone);
    if (phone === true) {
      alert("disconnected successfully");
    } else alert("connected successfully");
  };
  return (
    <div>
      {/* profile edit card */}

      <div className="bg-sidebar rounded-md p-5 space-y-5">
        <section className="flex space-x-5 items-center">
          <div className="relative">
            <Avatar
              src={profile ?? profile1}
              className={classes.large}
            ></Avatar>
            <label htmlFor="uploadProfile">
              <FiEdit className="absolute right-2 bottom-2 bg-navbar text-danger cursor-pointer" />
            </label>
            <input
              type="file"
              hidden
              id="uploadProfile"
              onChange={profileUpload}
            />
          </div>
          <div>
            {openEdit ? null : (
              <div className="flex">
                <h1 className="text-4xl text-lightGray font-medium">{name}</h1>
                <FiEdit
                  className="text-hardGray cursor-pointer"
                  onClick={() => setOpenEdit(true)}
                />
              </div>
            )}

            {openEdit ? (
              <div>
                <input
                  type="text"
                  id="editName"
                  value={userName}
                  onChange={editUsername}
                  name="userName"
                  className="border p-1 outline-none border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md"
                />
                <div className="flex justify-between mt-2">
                  <button
                    className="text-navbar rounded-md bg-btn px-4 py-1"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-navbar rounded-md bg-btn px-4 py-1"
                    onClick={updateEdit}
                  >
                    Update
                  </button>
                </div>
              </div>
            ) : null}

            <h4 className="text-lightGray">@username</h4>
          </div>
        </section>
      </div>

      {/* connect your social media account */}
      <div className="mt-5 bg-sidebar rounded-md p-5">
        <h1 className="text-lightGray font-bold">Connect Account</h1>
        <div className="w-4/6 space-y-4 mt-7">
          <div className="flex justify-between">
            <section className="flex items-center space-x-3">
              <FcGoogle /> <h4 className="text-hardGray text-medium">Google</h4>
            </section>
            <button
              className={`text-sm rounded-full border px-5 ${
                google ? "bg-btn text-navbar" : null
              }`}
              onClick={connectMedia}
            >
              {google ? "Connected" : "Connect"}
            </button>
          </div>
          <div className="flex justify-between">
            <section className="flex items-center space-x-3">
              <ImFacebook className="text-facebook" />
              <h4 className="text-hardGray text-medium">Facebook</h4>
            </section>
            <button
              className={`text-sm rounded-full border px-5 ${
                facebook ? "bg-btn text-navbar" : null
              }`}
              onClick={connectMediaFacebook}
            >
              {facebook ? "Connected" : "Connect"}
            </button>
          </div>
          <div className="flex justify-between">
            <section className="flex items-center space-x-3">
              <FaApple /> <h4 className="text-hardGray text-medium">Apple</h4>
            </section>
            <button
              className={`text-sm rounded-full border px-5 ${
                apple ? "bg-btn text-navbar" : null
              }`}
              onClick={connectMediaApple}
            >
              {apple ? "Connected" : "Connect"}
            </button>
          </div>
          <div className="flex justify-between">
            <section className="flex items-center space-x-3">
              <IoMdCall /> <h4 className="text-hardGray text-medium">Phone</h4>
            </section>
            <button
              className={`text-sm rounded-full border px-5 ${
                phone ? "bg-btn text-navbar" : null
              }`}
              onClick={connectMediaPhone}
            >
              {phone ? "Connected" : "Connect"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
