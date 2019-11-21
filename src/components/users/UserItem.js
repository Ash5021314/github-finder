import React from 'react'
import {Link} from 'react-router-dom'


function UserItem({user}) {
  return (
    <div className='card text-center'>
      <img src={user.avatar_url} className='round-img' style={{width: '60px'}} alt={user.name}/>
      <h3>{user.login}</h3>
      <div>
        {/*<a href={user.html_url}>More</a>*/}
        <Link to={`/user/${user.login}`}>More</Link>
      </div>
    </div>
  )
}

export default UserItem
