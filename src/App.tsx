import React, { useState, ChangeEvent, MouseEvent } from 'react';
// import Search from './components/search/Search';
import './App.css';
import Table from './components/Table';

interface Repo {
  name: string;
  html_url: string;
}

interface Data {
  name: string;
  avatar_url?: string;
  location?: string;
  bio?: string;
  repos_url: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [username, setUsername] = useState<string>('');
  const [repos, setRepos] = useState<Repo[]>([]);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const profileResponse = await fetch(`https://api.github.com/users/${username}`);
    const profileJson: Data = await profileResponse.json();
    console.log(profileJson);

    const repositoriesResponse = await fetch(profileJson.repos_url);
    const reposJson: Repo[] = await repositoriesResponse.json();
    console.log(reposJson);

    if (profileJson) {
      setData(profileJson);
      setRepos(reposJson);
    }
  };

  return (
    <div className="card">
      <h2>GitHubUser Finder</h2>
      <input
        type="text"
        value={username}
        onChange={changeHandler}
        className="search"
        placeholder="Enter your GitHub username..."
      />

      <span>
        <button type="submit" onClick={submitHandler} className="submit">
          Search
        </button>
      </span>
      {data && <Table data={data} repos={repos} />}
    </div>
  );
};

export default App;
