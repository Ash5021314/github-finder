import React, {useEffect} from 'react'
import Spinner from '../layout/spinner'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'

const User = ({user, loading, getUser, getUserRepos, repos, match}) => {
  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
    //eslint-disable-next-line
  }, [])
  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user
  // const {loading, repos} = props
  if (loading) return <Spinner/>
  return (
    <>
      <Link to='/'>Back to search</Link>
      Hireable: {' '}
      {hireable ? <i className='fa fa-check'/> : <i className='fa fa-circle'/>}
      <div className="card" style={{display: 'flex'}}>
        <div>
          <img src={avatar_url} className="round-img" style={{width: '150px'}} alt=""/>
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        {bio && <div>
          <h3>Bio</h3>
          <p>{bio}</p>
        </div>
        }
        <a href={html_url}> Visite Github Profile</a>
        <ul>
          {login && <>
            <li>
              <strong>Username:</strong> {login}
            </li>
          </>}
          {company && <>
            <li>
              <strong>company:</strong> {company}
            </li>
          </>}
          {blog && <>
            <li>
              <strong>WebSite:</strong> {blog}
            </li>
          </>}
        </ul>
      </div>
      <div className="card" style={{display: 'flex'}}>
        <div>Followers: {followers}</div>
        <div>Following: {following}</div>
        <div>Public Repos: {public_repos}</div>
        <div>public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos}/>
    </>
  )
}

export default User