import React from "react";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar } from "@material-ui/core";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";
import avatar from "../../assets/images/avatar.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import logo from "../assets/images/png-01.png";
const Navbar = () => {
  return (
    <div className="bg-navbar h-nav-height flex justify-between items-center h-full shadow-md">
      <div className="flex items-stretch space-x-10 ">
        {/* <h1 className="px-16 font-bold text-icons">LOGO</h1> */}
        <img src={logo} alt="logo" width="180px" />

        <Link
          className="rounded-full border border-sidebar px-5 py-1"
          to="/search"
        >
          <SearchIcon className="text-sidebar" />
          <input className="outline-none" type="text" />
        </Link>
      </div>

      <div className="flex space-x-8 px-5 items-center">
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
        <section className="text-icons">
          <NotificationsIcon />
        </section>
        <div>
          <Avatar src={avatar} style={{ background: "#566afa" }}>
            G
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
