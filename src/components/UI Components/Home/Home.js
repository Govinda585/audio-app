import React, { useState } from "react";
import CastVideos from "../Cast/CastVideos";
import LiveVideos from "../Live/LiveVideos";
import TrendingVideos from "../Trending/TrendingVideos";

const Home = (props) => {
  const { openCommentDialog, openShare } = props;

  const [moreCast, setMoreCast] = useState(4);
  const [moreLive, setMoreLive] = useState(4);
  const [moreTrending, setMoreTrending] = useState(4);

  return (
    <div className="space-y-5">
      <div>
        <div className="flex justify-between items-end">
          <h1 className="text-hardGray text-2xl font-medium">Live</h1>
          <small
            onClick={() => setMoreLive(moreLive + 4)}
            className="cursor-pointer"
          >
            view more &nbsp; &gt;
          </small>
        </div>
        <LiveVideos
          openCommentDialog={openCommentDialog}
          openShare={openShare}
          moreLive={moreLive}
        />
      </div>
      <div>
        <div className="flex justify-between items-end">
          <h1 className="text-hardGray text-2xl font-medium">Trending</h1>
          <small
            onClick={() => setMoreTrending(moreTrending + 4)}
            className="cursor-pointer"
          >
            view more &nbsp;&gt;
          </small>
        </div>
        <TrendingVideos
          openCommentDialog={openCommentDialog}
          openShare={openShare}
          moreTrending={moreTrending}
        />
      </div>
      <section>
        <div className="flex justify-between items-end">
          <h1 className="text-hardGray text-2xl font-medium">Cast</h1>
          <small
            onClick={() => setMoreCast(moreCast + 4)}
            className="cursor-pointer"
          >
            view more &nbsp; &gt;
          </small>
        </div>
        <CastVideos
          openCommentDialog={openCommentDialog}
          openShare={openShare}
          moreCast={moreCast}
        />
      </section>
    </div>
  );
};

export default Home;
