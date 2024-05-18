import React, { useState } from 'react'
// import Search from './components/search/Search';
// import './App.css'
// import Table from './components/Table'
import './index.css'
const App = () => {

  const [data, setData] = useState({});

  const [username, setUsername] = useState('')

  const [repos, setRepos] = useState([]);



  const changeHandler = (e: any) => {
    setUsername(e.target.value);
  }

  const submitHandler = async (e: any) => {

    e.preventDefault();
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const pjson = await profile.json();
    console.log(pjson);

    const repositories = await fetch(pjson.repos_url);
    const reposjson = await repositories.json();
    console.log(reposjson)

    if (pjson) {
      setData(pjson);
      setRepos(reposjson)
    }
  }


  return (
    <div className="">
      <h2>GitHubUser Finder</h2>
      <input type="text" value={username} onChange={changeHandler} className='search' placeholder='Enter your github username..' />

      <span>
        <button type='submit' onClick={submitHandler} className=''>search</button>
      </span>
      
      </div>
      

  )
}

export default App