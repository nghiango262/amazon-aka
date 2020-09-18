import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://avatars3.githubusercontent.com/u/23149176?s=400&amp;u=6c568044e75fa50094e2e10c04b1f467a5694277&amp;v=4"
        title="NgoNGHIA"
      />

      <Link className="header__link" to="/chung">
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="Covid-19 Infomation Center"
        />
      </Link>

      <Link className="header__link" to="/pages">
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      </Link>

      <Link className="header__link" to="/chat">
        <SidebarRow Icon={ChatIcon} title="Messenger" />
      </Link>

      <Link className="header__link" to="/friend">
        <SidebarRow Icon={PeopleIcon} title="Friends" />
      </Link>

      <Link className="header__link" to="/video">
        <SidebarRow Icon={VideoLibraryIcon} title="Video" />
      </Link>

      <Link className="header__link" to="/users">
        <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
      </Link>
    </div>
  );
}

export default Sidebar;
