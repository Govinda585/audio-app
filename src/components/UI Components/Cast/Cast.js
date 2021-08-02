import React from "react";
import Trending from "../Trending/Trending";

const Cast = (props) => {
  const { openCommentDialog, openShare } = props;
  return (
    <div className="space-y-3">
      <div>
        <h1 className="text-hardGray text-2xl font-medium">Cast</h1>
        <h4 className="text-hardGray mt-1">
          This video will be published to @user
        </h4>
      </div>
      <Trending openCommentDialog={openCommentDialog} openShare={openShare} />
    </div>
  );
};

export default Cast;
