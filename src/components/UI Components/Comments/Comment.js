import { Avatar, Dialog } from "@material-ui/core";
import React from "react";
import comment from "../../assets/images/comment.jpg";
import video from "../../assets/video/All over in 10 seconds.mp4";
import salman from "../../assets/images/image.png";
import { FaCommentDots } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import ReactPlayer from "react-player";
import team from "../../assets/images/team.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const Comment = (props) => {
  let { openComment, closeCommentDialog } = props;
  const classes = useStyles();
  const videos = {
    videoUrl: video,
    videoThumbnail: salman,
  };
  return (
    <div className="p-3">
      <Dialog maxWidth="xl" open={openComment} onClose={closeCommentDialog}>
        <div className="bg-mainBg">
          <h1 className="text-hardGray text-3xl p-3">Audio</h1>
          <div className="flex space-x-5 p-3">
            <div className="w-full">
              <div className="bg-navbar rounded-md p-2">
                <ReactPlayer
                  url={videos.videoUrl}
                  light={videos.videoThumbnail}
                  playing={true}
                  controls={true}
                  width="100%"
                  height="270px"
                />
                <div className="space-y-7 mt-3">
                  <div className="flex space-x-7">
                    <Avatar src={team} className={classes.large}>
                      p
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-lightGray font-medium text-xl">
                        Lorem ipsume
                      </h4>
                      <h5 className="text-lightGray">Lorem ipsum dolor sit.</h5>
                    </div>
                  </div>
                  <div className="flex space-x-10">
                    <section className="flex flex-col items-center text-heart">
                      <AiFillHeart
                        className="text-danger cursor-pointer"
                        size={23}
                      />
                      <h4 className="text-xs font-bold">10k</h4>
                    </section>
                    <section className="flex flex-col items-center text-heart">
                      <FaCommentDots className="cursor-pointer" size={23} />
                      <h4 className="text-xs font-bold">150</h4>
                    </section>
                    <section className="flex flex-col items-center text-heart">
                      <IoIosShareAlt className="cursor-pointer" size={23} />
                      <h4 className="text-xs font-bold">150k</h4>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-navbar p-3">
              <h4 className="border-b text-center pb-3">Comments</h4>

              <div className="space-y-3">
                <div className="flex space-x-5 items-center">
                  <Avatar src={comment}></Avatar>
                  <section>
                    <h1 className="text-sm text-lightGray">Name</h1>
                    <h4 className="text-xs text-lightGray">
                      i Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi eum rem totam exercitationem quidem illum?
                    </h4>
                  </section>
                </div>
                <div className="flex space-x-5 items-center">
                  <Avatar src={comment}></Avatar>
                  <section>
                    <h1 className="text-sm text-lightGray">Name</h1>
                    <h4 className="text-xs text-lightGray">
                      i Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi eum rem totam exercitationem quidem illum?
                    </h4>
                  </section>
                </div>
                <div className="flex space-x-5 items-center">
                  <Avatar src={comment}></Avatar>
                  <section>
                    <h1 className="text-sm text-lightGray">Name</h1>
                    <h4 className="text-xs text-lightGray">
                      i Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi eum rem totam exercitationem quidem illum?
                    </h4>
                  </section>
                </div>
                <div className="flex space-x-5 items-center">
                  <Avatar src={comment}></Avatar>
                  <section>
                    <h1 className="text-sm text-lightGray">Name</h1>
                    <h4 className="text-xs text-lightGray">
                      i Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi eum rem totam exercitationem quidem illum?
                    </h4>
                  </section>
                </div>
                <div className="flex space-x-5 items-center">
                  <Avatar src={comment}></Avatar>
                  <section>
                    <h1 className="text-sm">Name</h1>
                    <h4 className="text-xs">
                      i Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi eum rem totam exercitationem quidem illum?
                    </h4>
                  </section>
                </div>
                <div className="flex space-x-5 items-center">
                  <Avatar src={comment}></Avatar>
                  <section>
                    <h1 className="text-sm">Name</h1>
                    <h4 className="text-xs">
                      i Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Modi eum rem totam exercitationem quidem illum?
                    </h4>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Comment;
