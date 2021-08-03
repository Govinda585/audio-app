import { Avatar } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import profile from "../../../assets/images/avatar.png";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));
const Setting = () => {
  const classes = useStyles();
  const [name, setName] = useState("User Name");
  const [userName, setUserName] = useState("User Name");
  const [openEdit, setOpenEdit] = useState(false);

  const editUsername = (e) => {
    setUserName(e.target.value);
  };

  const cancelEdit = () => {
    setOpenEdit(false);
  };

  const updateEdit = () => {
    setOpenEdit(false);
    setName(userName);
  };
  return (
    <div>
      {/* profile edit card */}

      <div className="bg-sidebar rounded-md p-5 space-y-5">
        <section className="flex space-x-5 items-center">
          <div className="relative">
            <Avatar src={profile} className={classes.large}></Avatar>
            <label htmlFor="uploadProfile">
              <FiEdit className="absolute right-2 bottom-2 bg-navbar text-danger cursor-pointer" />
            </label>
            <input type="file" hidden id="uploadProfile" />
          </div>
          <div>
            {openEdit ? null : (
              <div className="flex">
                <h1 className="text-4xl text-lightGray font-medium">{name}</h1>
                <FiEdit
                  className="text-hardGray cursor-pointer"
                  onClick={() => setOpenEdit(true)}
                />
              </div>
            )}

            {openEdit ? (
              <div>
                <input
                  type="text"
                  id="editName"
                  value={userName}
                  onChange={editUsername}
                  name="userName"
                  className="border p-1 outline-none border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md"
                />
                <div className="flex justify-between mt-2">
                  <button
                    className="text-navbar rounded-md bg-btn px-4 py-1"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-navbar rounded-md bg-btn px-4 py-1"
                    onClick={updateEdit}
                  >
                    Update
                  </button>
                </div>
              </div>
            ) : null}

            <h4 className="text-lightGray">@username</h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Setting;
