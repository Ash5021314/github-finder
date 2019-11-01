import React,{useState, useEffect} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import axios from "axios"

function App() {
  const [user,setUser] = useState({
    users:[],
    loading:false
  })
  useEffect(async ()=> {
     setUser((user)=>{return{loading: true}});
      const res = await axios.get('https://api.github.com/users');
    setUser({users : res.data, loading:false});
    }
  )

  return (
    <div className="App">
      <Navbar title = "Github Finder" icon = 'fa fa-github'/>
      <div className="container">
        <Users/>
      </div>
    </div>
  );
}

export default App;
