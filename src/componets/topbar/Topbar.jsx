import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "./topbar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <span className="logo">AkinSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search />
          <input
            placeholder="search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
          <Avatar
            className="avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
