import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import SettingsInputAntennaOutlinedIcon from "@material-ui/icons/SettingsInputAntennaOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import CastOutlinedIcon from "@material-ui/icons/CastOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
const Sidebar = () => {
  return (
    <div className=" divide-y-2 divide-sidebar-divider divide-solid px-5 bg-sidebar h-main-height">
      <ul className="py-8 space-y-3">
        <section className="sidebar-item">
          <HomeOutlinedIcon /> <li>Home</li>
        </section>
        <section className="sidebar-item">
          <PersonOutlinedIcon /> <li>Profile</li>
        </section>
        <section className="sidebar-item">
          <PeopleOutlinedIcon /> <li>Following List</li>
        </section>
      </ul>
      <ul className="py-8 space-y-3">
        <section className="sidebar-item">
          <SettingsInputAntennaOutlinedIcon />
          <li>Live</li>
        </section>

        <section className="sidebar-item">
          <MicNoneOutlinedIcon /> <li>Voice Recording</li>
        </section>

        <section className="sidebar-item">
          <TrendingUpOutlinedIcon /> <li>Trending</li>
        </section>
        <section className="sidebar-item">
          <CastOutlinedIcon />
          <li>Cast</li>{" "}
        </section>
      </ul>
      <ul className="py-8 space-y-3">
        <section className="sidebar-item">
          <SettingsOutlinedIcon />
          <li>Setting</li>
        </section>
      </ul>
    </div>
  );
};

export default Sidebar;
