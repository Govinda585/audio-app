import React, { useEffect } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import { useState } from "react";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import AudioPlayer from "react-h5-audio-player";
import { MdKeyboardVoice } from "react-icons/md";
const Mp3Recorder = new MicRecorder({ bitRate: 128 });
const Record = () => {
  const [permission, setPermission] = useState({
    isRecording: false,
    blobURL: "",
    isBlocked: false,
  });

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        setPermission({ isBlocked: false });
      },
      () => {
        console.log("Permission Denied");
        setPermission({ isBlocked: true });
      }
    );
  }, []);
  const start = () => {
    if (permission.isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          setPermission({ isRecording: true });
        })
        .catch((e) => console.error(e));
    }
  };

  const stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setPermission({ blobURL, isRecording: false });
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="text-center">
      {/* audio player  */}
      <AudioPlayer
        src={permission.blobURL}
        onPlay={(e) => console.log("onPlay")}
        autoPlayAfterSrcChange={false}
      />
      {/* audio recording */}
      <h1
        className={`mt-5 ${
          permission.isRecording ? "text-danger" : "text-lightGray"
        }`}
      >
        {permission.isRecording ? "Listening..." : "Voice Record"}
      </h1>
      {permission.isRecording ? (
        <button
          onClick={stop}
          disabled={!permission.isRecording}
          className="outline-none"
        >
          <PauseCircleOutlineOutlinedIcon
            style={{ fontSize: "45px", color: "#f24847" }}
          />
        </button>
      ) : (
        <button
          onClick={start}
          disabled={permission.isRecording}
          className="outline-none   "
        >
          <MdKeyboardVoice size={44} className="text-danger" />
        </button>
      )}
    </div>
  );
};

export default Record;
