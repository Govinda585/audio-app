import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import SettingsInputAntennaOutlinedIcon from "@material-ui/icons/SettingsInputAntennaOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import CastOutlinedIcon from "@material-ui/icons/CastOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className=" divide-y-2 divide-sidebar-divider divide-solid px-5 bg-sidebar h-main-height">
      <ul className="py-8 space-y-3">
        <NavLink className="sidebar-item" to="/">
          <HomeOutlinedIcon /> <li>Home</li>
        </NavLink>
        <NavLink className="sidebar-item" to="profile">
          <PersonOutlinedIcon /> <li>Profile</li>
        </NavLink>
        <NavLink className="sidebar-item" to="/following-list">
          <PeopleOutlinedIcon /> <li>Following List</li>
        </NavLink>
      </ul>
      <ul className="py-8 space-y-3">
        <NavLink className="sidebar-item" to="/live">
          <SettingsInputAntennaOutlinedIcon />
          <li>Live</li>
        </NavLink>

        <NavLink className="sidebar-item" to="/recording">
          <MicNoneOutlinedIcon /> <li>Voice Recording</li>
        </NavLink>

        <NavLink className="sidebar-item" to="/trending">
          <TrendingUpOutlinedIcon /> <li>Trending</li>
        </NavLink>
        <NavLink className="sidebar-item" to="/cast">
          <CastOutlinedIcon />
          <li>Cast</li>
        </NavLink>
      </ul>
      <ul className="py-8 space-y-3">
        <NavLink className="sidebar-item" to="/setting">
          <SettingsOutlinedIcon />
          <li>Setting</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
