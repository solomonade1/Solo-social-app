import "./closeFriend.css";

function CloseFriend({ friend }) {
  return (
    <div className="closeFriend">
      <li className="sidebarFriend">
        <img
          src={friend.profilePicture}
          alt="friend"
          className="sidebarFriendImg"
        />
        <span className="sidebarFriendName">{friend.username}</span>
      </li>
    </div>
  );
}

export default CloseFriend;
