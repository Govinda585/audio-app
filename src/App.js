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
import Upload from "./components/UI Components/Upload/Upload";
import Search from "./components/UI Components/Search/Search";
import Login from "./components/UI Components/Login/Login";

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

  // login
  const [loginModel, setLoginModel] = useState(true);

  const loginSuccess = () => {
    setLoginModel(false);
  };
  const logoutSuccess = () => {
    setLoginModel(true);
  };
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(!menu);
  };
  return (
    <Router>
      <div className="relative">
        {menu ? (
          <div className="absolute top-0 right-0 z-10 sm:w-2/4 md:w-1/4 w-full lg:hidden">
            <Sidebar />
          </div>
        ) : null}
        <div className="wrapper h-screen">
          <Login loginModel={loginModel} loginSuccess={loginSuccess} />
          <Share closeShare={closeShare} open={open} />
          <Comment
            openComment={openComment}
            closeCommentDialog={closeCommentDialog}
          />
          <div className="nav">
            <Navbar
              logoutSuccess={logoutSuccess}
              menu={menu}
              openMenu={openMenu}
            />
          </div>
          <div className="sidebar hidden lg:block">
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
              <Route path="/upload">
                <Upload />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
