import './friend.css'

const FriendListItem = ({ items }) => {
  return (
    <>
    {items.map(item => (
    <li className='friendListItem' key={item.id}>
      <span className = {`${item.isOnline}`} ></span >
      <img className='avatar'
        src={item.avatar}
        alt="User avatar"
        width="48"
      />
      <p className='friendName'>{item.name}</p>
    </li>
    ))}
    </>
  );
};

export default FriendListItem;
