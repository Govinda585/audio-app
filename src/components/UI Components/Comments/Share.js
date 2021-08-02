import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import instagram from "../../assets/images/instagram.png";
const Share = (props) => {
  const { closeShare, open } = props;
  return (
    <div>
      <Dialog open={open} onClose={closeShare}>
        <div className="px-5">
          <div className="flex items-center justify-between">
            <DialogTitle>Share</DialogTitle>
            <CloseIcon onClick={closeShare} className="cursor-pointer" />
          </div>
          <DialogContent dividers>
            <div className="flex space-x-10 items-center p-4">
              <FaFacebook size={38} className="text-facebook cursor-pointer" />
              <img
                src={instagram}
                alt="instagram"
                height="37px"
                width="37px"
                className="cursor-pointer"
              />
              <IoLogoWhatsapp
                size={38}
                className="text-whatsApp cursor-pointer"
              />
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default Share;
