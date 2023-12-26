import './friend.css'

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
    <li className='friendListItem'>
      <span className = {`${isOnline}`} ></span >
      <img className='avatar'
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className='friendName'>{name}</p>
    </li>
    </>
  );
};

export default FriendListItem;
