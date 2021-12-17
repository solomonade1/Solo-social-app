import Topbar from "../../componets/topbar/Topbar";
import Sidebar from "../../componets/sidebar/Sidebar";
import Feed from "../../componets/feed/Feed";
import Rightbar from "../../componets/rightbar/Rightbar";

import "./home.css";

function Home() {
  return (
    <div className="home">
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
