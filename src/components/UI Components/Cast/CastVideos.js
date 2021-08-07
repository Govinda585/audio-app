import React from "react";
import video from "../../assets/video/All over in 10 seconds.mp4";
import salman from "../../assets/images/image.png";
import Videos from "../Trending/Videos";

const videos = [
  {
    videoUrl: video,
    videoThumbnail: salman,
  },
  {
    videoUrl: video,
    videoThumbnail: salman,
  },
  {
    videoUrl: video,
    videoThumbnail: salman,
  },
  {
    videoUrl: video,
    videoThumbnail: salman,
  },
  {
    videoUrl: video,
    videoThumbnail: salman,
  },
  {
    videoUrl: video,
    videoThumbnail: salman,
  },
];

const CastVideos = (props) => {
  const { openCommentDialog, openShare, moreCast } = props;
  return (
    <div className="flex flex-wrap">
      {videos.slice(0, moreCast).map((video) => (
        <div className="w-full sm:w-2/4 md:w-2/6 xl:w-1/4 p-1">
          <Videos
            openCommentDialog={openCommentDialog}
            videoUrl={video.videoUrl}
            videoThumbnail={video.videoThumbnail}
            openShare={openShare}
          />
        </div>
      ))}
    </div>
  );
};

export default CastVideos;
