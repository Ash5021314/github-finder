import React, {useState} from 'react'
import './App.css'
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import axios from "axios"
import Search from "./components/users/Search"

function App() {
  const REACT_APP_GITHUB_CLIENT_SECRET = 'bbc35de55bd70a345d09bf7e929b69d864c81753'
  const REACT_APP_GITHUB_CLIENT_ID = '1f54dae0ef0829c8251c'
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)

  const searchUsers = async text => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id = ${
      REACT_APP_GITHUB_CLIENT_ID}&client_secret=${REACT_APP_GITHUB_CLIENT_SECRET}`)
    setLoading(false)
    setUser(res.data.items)
  }

  const clearUsers = () => {
    setUser([])
    setLoading(false)
  }
  return (
    <div className="App">
      <Navbar title="Github Finder" icon='fa fa-github'/>
      <div className="container">
        <Search searchUsers={searchUsers} clearUsers={clearUsers}/>
        <Users loading={loading} users={user}/>
      </div>
    </div>
  )
}

export default App
