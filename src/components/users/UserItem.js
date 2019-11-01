import React from 'react';

function UserItem({user} ) {
  return (
    <div className='card text-center'>
     <img src = {user.avatar_url} className='round-img' style={{width:'60px'}} alt={user.name}/>
      <h3>{user.login}</h3>
      <div>
        <a href={user.html_url}>More</a>
      </div>
    </div>
  );
}

export default UserItem;
