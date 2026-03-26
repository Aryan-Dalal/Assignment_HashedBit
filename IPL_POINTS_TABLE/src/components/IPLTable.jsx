import { useEffect, useState } from "react";

function IPLTable() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        // Sort by NRR (ascending)
        const sortedData = [...data].sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>IPL Season 2022 Points</h1>

      <table border="1">
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{team.team}</td>
              <td>{team.played}</td>
              <td>{team.wins}</td>
              <td>{team.losses}</td>
              <td>{team.ties}</td>
              <td>{team.NRR}</td>
              <td>{team.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IPLTable;