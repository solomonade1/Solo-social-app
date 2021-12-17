import "./profile.css";
import Topbar from "../../componets/topbar/Topbar";
import Sidebar from "../../componets/sidebar/Sidebar";
import Feed from "../../componets/feed/Feed";
import Rightbar from "../../componets/rightbar/Rightbar";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img src="assets/post/7.jpeg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4>Akinbami Solomon</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
