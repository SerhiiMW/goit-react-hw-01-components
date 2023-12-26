import FriendListItem from "./FriendListItem";
import './friend.css'


const FriendList = ( { friends } ) => {
    return (
        <div className='friendWrapper'>
            <ul className='friendList'>
            {friends.map(friend => 
                <FriendListItem key={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name}  />
            )}   
            </ul>
        </div>
 )}

export default FriendList;