import React, {useState} from 'react';
import UserItem from "./UserItem"
function Users() {
 const [userList, setUserList]= useState({
   users: [
     {
       login: "mojombo",
       id: 1,
       avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
       html_url: "https://github.com/mojombo",
     },
     {
       login: "defunkt",
       id: 2,
       avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
       html_url: "https://github.com/defunkt",
     },
     {
       login: "pjhyett",
       id: 3,
       avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
       html_url: "https://github.com/pjhyett",
     }
   ]
 })
 const userStyle={
   display:'grid',
   gridTemplateColumns:'repeat(3, 1fr',
   gridGap: '1 rem'
 }
  return (
    <div style={userStyle}>
      {userList.users.map(user =>(
        <UserItem
          key={user.id}
          user={user}
          testProp={'test'}
        />
      ))}
    </div>
  );
}

export default Users;
