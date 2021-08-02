import React from "react";
import Videos from "./Videos";
import video from "../../assets/video/All over in 10 seconds.mp4";
import salman from "../../assets/images/image.png";

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
  {
    videoUrl: video,
    videoThumbnail: salman,
  },
  {
    videoUrl: video,
    videoThumbnail: salman,
  },
];

const TrendingVideos = (props) => {
  const { openCommentDialog } = props;
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <div className="w-1/4 p-1">
          <Videos
            openCommentDialog={openCommentDialog}
            videoUrl={video.videoUrl}
            videoThumbnail={video.videoThumbnail}
          />
        </div>
      ))}
    </div>
  );
};

export default TrendingVideos;
