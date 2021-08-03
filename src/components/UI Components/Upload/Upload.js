import React from "react";
import { useState } from "react";
import { ImCloudUpload } from "react-icons/im";

const Upload = () => {
  const [post, setPost] = useState({
    title: "",
    category: "comedy",
    tags: [],
    message: "",
  });
  console.log(post);

  const { title, category, tags, message } = post;

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const uploadPost = (e) => {
    e.preventDefault();
    alert("post successful");
  };
  return (
    <div>
      <h1 className="text-hardGray text-2xl font-medium">Upload</h1>
      <h4 className="text-hardGray mt-1">
        This video will be published to @user
      </h4>
      {/* upload card */}
      <div className="flex bg-navbar p-5 space-x-7 mt-7">
        <section className="bg-sidebar rounded-md w-96 flex flex-col items-center justify-center p-5">
          <ImCloudUpload size={74} className="text-lightGray cursor-pointer" />
          <h1 className="text-sidebar">Select to Upload Recorded Audio</h1>
        </section>
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
            <input
              name="tags"
              value={tags}
              type="text"
              placeholder="#tags"
              className="w-full outline-none bg-sidebar p-2"
              required
              onChange={handleSubmit}
            />
            <textarea
              name="message"
              value={message}
              className="outline-none bg-sidebar w-full p-2"
              placeholder="Type Message"
              rows="5"
              required
              onChange={handleSubmit}
            ></textarea>
            <div className="flex justify-end">
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

export default Upload;
