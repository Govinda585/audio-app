import React from "react";
import TrendingVideos from "../Trending/TrendingVideos";

const Search = ({ openCommentDialog, openShare }) => {
  return (
    <div>
      <h1 className="text-hardGray text-2xl font-medium">Search</h1>
      <h4 className="text-hardGray mt-1">
        This video will be published to @user
      </h4>

      <div className="mt-5">
        <h1 className="text-hardGray text-2xl font-medium">Trending Now</h1>
        <TrendingVideos
          openCommentDialog={openCommentDialog}
          openShare={openShare}
        />
      </div>
    </div>
  );
};

export default Search;
