import React from "react";
import CastVideos from "../Cast/CastVideos";
import LiveVideos from "../Live/LiveVideos";
import TrendingVideos from "../Trending/TrendingVideos";

const Home = (props) => {
  const { openCommentDialog, openShare } = props;
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-hardGray text-2xl font-medium">Live</h1>
        <LiveVideos
          openCommentDialog={openCommentDialog}
          openShare={openShare}
        />
      </div>
      <div>
        <h1 className="text-hardGray text-2xl font-medium">Trending</h1>
        <TrendingVideos
          openCommentDialog={openCommentDialog}
          openShare={openShare}
        />
      </div>
      <section>
        <h1 className="text-hardGray text-2xl font-medium">Cast</h1>
        <CastVideos
          openCommentDialog={openCommentDialog}
          openShare={openShare}
        />
      </section>
    </div>
  );
};

export default Home;
