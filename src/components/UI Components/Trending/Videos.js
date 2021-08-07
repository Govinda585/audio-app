import { Avatar } from "@material-ui/core";
import React from "react";
import ReactPlayer from "react-player";
import team from "../../assets/images/team.jpg";
import { FaCommentDots } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";

const Videos = (props) => {
  let { videoUrl, videoThumbnail, openCommentDialog, openShare } = props;
  return (
    <div className="bg-navbar rounded-md p-2">
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <ReactPlayer
          url={videoUrl}
          light={videoThumbnail}
          playing={true}
          controls={true}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0", left: "0" }}
        />
      </div>
      <div className="space-y-3">
        <div className="flex space-x-3">
          <Avatar src={team}>p</Avatar>
          <div>
            <h4 className="text-lightGray font-medium">Lorem ipsume</h4>
            <h5 className="text-sm text-lightGray">Lorem ipsum dolor sit.</h5>
          </div>
        </div>
        <div className="flex space-x-5">
          <section className="flex flex-col items-center text-heart">
            <AiFillHeart className="text-danger cursor-pointer" />
            <h4 className="text-xs font-bold">10k</h4>
          </section>
          <section className="flex flex-col items-center text-heart">
            <FaCommentDots
              className="cursor-pointer"
              onClick={openCommentDialog}
            />
            <h4 className="text-xs font-bold">150</h4>
          </section>
          <section className="flex flex-col items-center text-heart">
            <IoIosShareAlt className="cursor-pointer" onClick={openShare} />
            <h4 className="text-xs font-bold">150k</h4>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Videos;
