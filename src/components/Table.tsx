import React from 'react';
import '../App.css';

interface Repo {
  name: string;
  html_url: string;
}

interface Data {
  name: string;
  avatar_url?: string;
  location?: string;
  bio?: string;
}

interface TableProps {
  data: Data;
  repos: Repo[];
}

const Table: React.FC<TableProps> = ({ data, repos }) => {
  return (
    <div className="profile">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Profile</th>
            <th>Location</th>
            <th>Bio</th>
            <th>Repositories</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td>
              {!data.avatar_url ? (
                " "
              ) : (
                <img src={data.avatar_url} alt="avatar" className="avatar" />
              )}
            </td>
            <td>{data.location}</td>
            <td>{data.bio}</td>
            <td>
              {repos.map((repo) => (
                <div className="" key={repo.name}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repos">
                    {repo.name}
                  </a>
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
