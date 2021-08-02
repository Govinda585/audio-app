import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/UI Components/Home/Home";
import Profile from "./components/UI Components/Profile/Profile";
import FollowingList from "./components/UI Components/FollowingList/FollowingList";
import Live from "./components/UI Components/Live/Live";
import VoiceRecording from "./components/UI Components/VoiceRecording/VoiceRecording";
import Trending from "./components/UI Components/Trending/Trending";
import Cast from "./components/UI Components/Cast/Cast";
import Setting from "./components/UI Components/Setting/Setting";
import Comment from "./components/UI Components/Comments/Comment";
import { useState } from "react";
import Share from "./components/UI Components/Comments/Share";

function App() {
  const [openComment, setOpenComment] = useState(false);
  const [open, setOpen] = useState(false);
  const openCommentDialog = () => {
    setOpenComment(true);
  };
  const closeCommentDialog = () => {
    setOpenComment(false);
  };

  const openShare = () => {
    setOpen(true);
  };
  const closeShare = () => {
    setOpen(false);
  };
  return (
    <Router>
      <div className="wrapper h-screen">
        <Share closeShare={closeShare} open={open} />
        <Comment
          openComment={openComment}
          closeCommentDialog={closeCommentDialog}
        />
        <div className="nav">
          <Navbar />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main p-5">
          <Switch>
            <Route exact path="/">
              <Home
                openCommentDialog={openCommentDialog}
                openShare={openShare}
              />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/following-list">
              <FollowingList />
            </Route>
            <Route exact path="/live">
              <Live
                openCommentDialog={openCommentDialog}
                openShare={openShare}
              />
            </Route>
            <Route exact path="/recording">
              <VoiceRecording />
            </Route>
            <Route exact path="/trending">
              <Trending
                openCommentDialog={openCommentDialog}
                openShare={openShare}
              />
            </Route>
            <Route exact path="/cast">
              <Cast
                openCommentDialog={openCommentDialog}
                openShare={openShare}
              />
            </Route>
            <Route exact path="/setting">
              <Setting />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
