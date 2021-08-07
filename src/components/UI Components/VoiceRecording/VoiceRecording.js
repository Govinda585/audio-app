import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import profile from "../../../assets/images/avatar.png";
import { makeStyles } from "@material-ui/core/styles";
import "react-h5-audio-player/lib/styles.css";
import Record from "./Record";
import CollectionsIcon from "@material-ui/icons/Collections";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));
const VoiceRecording = () => {
  const classes = useStyles();
  const [recording, setRecording] = useState({
    title: "",
    category: "comedy",
    message: "",
    tags: [],
  });
  const { title, category, message, tags } = recording;
  console.log(recording);

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setRecording({
      ...recording,
      [name]: value,
    });
  };
  const uploadPost = (e) => {
    e.preventDefault();
    alert("post successfully");
  };

  const [media, setMedia] = useState();
  const reader = new FileReader();
  const uploadMedia = (e) => {
    let files = e.target.files;
    if (files[0]) {
      reader.readAsDataURL(files[0]);
      reader.addEventListener("error", () => {
        console.error(`Error occurred reading file: ${files.name}`);
      });
      reader.onload = (e) => {
        let file = e.target.result;

        // set profile to send in server base64
        // setMedia(file);
        setMedia(files[0]);
      };
    }
  };

  const inviteRecord = () => {
    alert("invite for record working...");
  };
  return (
    <div>
      <section className="flex space-x-5 items-center">
        <Avatar src={profile} className={classes.large}></Avatar>
        <div className="w-full">
          <h1 className="text-3xl text-lightGray font-medium">User Name</h1>
          <section className="flex justify-between">
            <h4 className="text-lightGray">
              This video will be published to @user
            </h4>
            <h4
              className="text-lightGray cursor-pointer"
              onClick={inviteRecord}
            >
              Invite for @record
            </h4>
          </section>
        </div>
      </section>
      {/* recording card */}

      <div className="bg-navbar rounded-md p-5 mt-5">
        <section>
          <form className="space-y-5" onSubmit={uploadPost}>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Title"
              className="w-full outline-none bg-sidebar p-2"
              required
              onChange={handleSubmit}
            />
            <select
              className=" outline-none bg-sidebar p-2 w-full"
              value={category}
              onChange={handleSubmit}
              name="category"
            >
              <option value="comedy">Comedy</option>
              <option value="action">Action</option>
              <option value="sad">Sad</option>
              <option value="traveling">Traveling</option>
            </select>
            <textarea
              name="message"
              value={message}
              className="outline-none bg-sidebar w-full p-2"
              placeholder="Type Message"
              rows="2"
              required
              onChange={handleSubmit}
            ></textarea>
            <Record />
            <div className="flex items-center space-x-2">
              <label htmlFor="uploadMedia">
                <CollectionsIcon className="text-lightGray cursor-pointer" />
              </label>
              <input
                type="file"
                id="uploadMedia"
                hidden
                onChange={uploadMedia}
              />
              <input
                name="tags"
                value={tags}
                type="text"
                placeholder="#tags"
                className="w-full rounded-full outline-none bg-sidebar p-1"
                required
                onChange={handleSubmit}
              />
              <button
                className="bg-post px-7 text-navbar rounded-full"
                type="submit"
              >
                Post
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default VoiceRecording;
