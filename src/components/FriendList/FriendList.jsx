import friends from '../../data/friends.json';
import FriendListItem from "./FriendListItem";
import './friend.css'


const FriendList = () => {
    return (
        <div className='friendWrapper'>
            <ul className='friendList'>
                <FriendListItem items={friends} />
            </ul>
        </div>
    )
}

export default FriendList;