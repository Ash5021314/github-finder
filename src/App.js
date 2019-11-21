import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import User from './components/users/User'

const App = () => {
  const REACT_APP_GITHUB_CLIENT_SECRET = 'bbc35de55bd70a345d09bf7e929b69d864c81753'
  const REACT_APP_GITHUB_CLIENT_ID = '1f54dae0ef0829c8251c'


  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [repos, setRepos] = useState([])

  const searchUsers = async text => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id = ${
      REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`)
    setLoading(false)
    setUsers(res.data.items)
  }
  const getUser = async (username) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}?&client_id = ${
      REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`)
    setLoading(false)
    setUser(res.data)
  }

  const getUserRepos = async (username) => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&&sort=created:asc&&client_id = ${
      REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`)
    setLoading(false)
    setRepos(res.data)
  }
  const closeSection = () => {
    setAlert(null)
  }
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }
  const showAlert = (msg, type) => {
    setAlert({alert: {msg, type}})
  }
  return (
    <Router>
      <div className='App'>
        <Navbar title='Github Finder' icon='fa fa-github'/>
        <div className='container'>
          <Alert alert={alert} closeSection={closeSection}/>
          <Switch>
            <Route exact path='/' render={props => (
              <>
                <Search searchUsers={searchUsers} clearUsers={clearUsers} showAlert={showAlert}/>
                <Users loading={loading} users={users}/>
              </>
            )}/>
            <Route exact path='/about' component={About}/>
            <Route exact path=' /user/:login' render={props => (
              <User {...props} getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user}
                    loading={loading}/>
            )}/>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
