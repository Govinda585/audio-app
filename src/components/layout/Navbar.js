import React from "react";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar } from "@material-ui/core";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import avatar from "../../assets/images/avatar.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import logo from "../assets/images/png-2.png";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
const Navbar = ({ logoutSuccess, menu, openMenu }) => {
  const notification = [
    "notification1",
    "notification2",
    "notification3",
    "notification4",
    "notification5",
  ];
  const [showNoti, setShowNoti] = useState(false);

  const [toogleProfile, setToogleProfile] = useState(false);

  return (
    <div className="bg-navbar h-nav-height flex justify-between items-center shadow-md">
      {/* <h1 className="px-16 font-bold text-icons">LOGO</h1> */}
      <div className="flex space-x-7">
        <Link to="/" className="px-1 sm:px-16">
          <img src={logo} alt="logo" width="75px" />
        </Link>
        <Link
          className="rounded-full border border-sidebar px-1 lg:px-5 flex items-center"
          to="/search"
        >
          <input className="outline-none w-32 sm:w-full" type="text" />
          <SearchIcon className="text-sidebar" />
        </Link>
      </div>

      <div className=" hidden lg:flex space-x-8 px-5 items-center">
        <Link className="text-icons" to="/upload">
          <Avatar style={{ color: "white", background: "#566afa" }}>
            <PublishIcon />
          </Avatar>
        </Link>
        <Link
          className="flex space-x-5 border-2 border-icons py-1 rounded-full px-3 items-center"
          to="/recording"
        >
          <MicNoneOutlinedIcon className="text-icons" />
          <h1 className="text-icons uppercase font-bold">rec</h1>
        </Link>
        <section className="text-icons relative">
          <NotificationsIcon
            onClick={() => setShowNoti(!showNoti)}
            className="cursor-pointer"
          />
          <small
            onClick={() => setShowNoti(!showNoti)}
            className="cursor-pointer bg-danger h-4 w-4 rounded-full flex items-center justify-center text-navbar absolute bottom-3 left-3 text-xs"
          >
            {notification.length}
          </small>

          {showNoti ? (
            <div className="absolute bg-navbar w-44 text-center space-y-2 border rounded-md p-4 right-1 mt-3 z-10">
              <h1 className="text-center font-medium text-hardGray">
                Notification
              </h1>

              {notification.map((list) => (
                <h1
                  className="border-b text-sm text-lightGray cursor-pointer"
                  key={list}
                >
                  {list}
                </h1>
              ))}
            </div>
          ) : null}
        </section>
        <div>
          <Avatar
            src={avatar}
            style={{ background: "#566afa" }}
            onClick={() => setToogleProfile(!toogleProfile)}
          >
            G
          </Avatar>
          {toogleProfile ? (
            <div className="absolute bg-navbar text-center space-y-2 border rounded-md p-4 right-1 mt-3 z-10">
              <Link to="/profile" className="text-lightGray">
                Profile
              </Link>
              <h1
                className="text-danger cursor-pointer"
                onClick={logoutSuccess}
              >
                Logout
              </h1>
            </div>
          ) : null}
        </div>
      </div>
      <div className="lg:hidden px-3 z-10 cursor-pointer">
        {menu ? (
          <CloseIcon onClick={openMenu} />
        ) : (
          <MenuIcon onClick={openMenu} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
