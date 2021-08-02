import React from "react";
import Keywords from "./Keywords";
import TrendingVideos from "./TrendingVideos";

const Trending = (props) => {
  const { openCommentDialog, openShare } = props;
  return (
    <div>
      {/* heading */}
      <h1 className="text-hardGray text-2xl font-medium">Top Trendings</h1>
      <h4 className="text-hardGray mt-1">
        This video will be published to @user
      </h4>
      {/* keywords */}
      <Keywords />
      {/* videos */}
      <TrendingVideos
        openCommentDialog={openCommentDialog}
        openShare={openShare}
      />
    </div>
  );
};

export default Trending;
