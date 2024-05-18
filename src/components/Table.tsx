import React from 'react'
import '../App.css'


const Table = ({data, repos}) => {
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

          <tr>
            <td>
              {data.name}
            </td>
            <td>{!data.avatar_url ? " " : (<img src={data.avatar_url} alt=" image" className='avatar' />)}</td>
            <td>{data.location}</td>
            <td>{data.bio}</td>
            {/* <td>{!data.repos_url}</td> */}
            <td>
              {repos.map(repo => (
                <div className='' key={repo.name}>
                  <a href={repo.html_url} target='_blank' className='repos'>{repo.name}</a>
                </div>
              ))}
              
            </td>
          </tr>

        </table>
      </div>
  )
}

export default Table