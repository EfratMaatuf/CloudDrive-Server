import React, { useContext } from "react";
import { AiOutlineDownload, AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import "./File.css";
import PopupContext from "../../context/PopupContext";
const File = ({ fileName, type }) => {
  const { togglePopup, setPopupContent } = useContext(PopupContext);

  return (
    <div className="file">
      <div className={`${type} imageType`}>
        <div className="fileName"> {fileName} </div>
      </div>
      <div className="options">
        <div onClick={togglePopup}>
          <AiTwotoneDelete />
        </div>
        <div onClick={togglePopup}>
          <MdOutlineDriveFileRenameOutline />
        </div>
        <div onClick={togglePopup}>
          <AiOutlineDownload />
        </div>
        <div onClick={togglePopup}>
          <CgDetailsMore />
        </div>
      </div>
    </div>
  );
};

export default File;
