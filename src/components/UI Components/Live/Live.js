import React from "react";
import Trending from "../Trending/Trending";
import LiveVideos from "./LiveVideos";

const Live = (props) => {
  const { openCommentDialog, openShare } = props;
  return (
    <div className="space-y-3">
      <div>
        <h1 className="text-hardGray text-2xl font-medium">
          Live | Join the latest streams
        </h1>
        <h4 className="text-hardGray mt-1">
          This video will be published to @user
        </h4>
      </div>
      <h1 className="text-hardGray text-xl font-medium">Live</h1>
      <LiveVideos openCommentDialog={openCommentDialog} openShare={openShare} />
      <Trending openCommentDialog={openCommentDialog} openShare={openShare} />
    </div>
  );
};

export default Live;
