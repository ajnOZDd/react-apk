
import './App.css';
import './assets/style.css';
import logo from './assets/images/logo.jpg'; // Importez l'image


function App() {
  
  const playerStats = [
    { 
      id: 1,
      playerName: 'LeBron James',
      points: 30,
      rebounds: 8,
      assists: 10,
      steals: 2,
      blocks: 1
    },
    { 
      id: 2,
      playerName: 'Stephen Curry',
      points: 35,
      rebounds: 5,
      assists: 6,
      steals: 3,
      blocks: 0
    },
    { 
      id: 3,
      playerName: 'Kevin Durant',
      points: 28,
      rebounds: 9,
      assists: 7,
      steals: 1,
      blocks: 2
    },
    { 
      id: 4,
      playerName: 'Giannis Antetokounmpo',
      points: 25,
      rebounds: 12,
      assists: 5,
      steals: 4,
      blocks: 3
    },
    { 
      id: 5,
      playerName: 'Kawhi Leonard',
      points: 31,
      rebounds: 7,
      assists: 8,
      steals: 2,
      blocks: 2
    },
    { 
      id: 6,
      playerName: 'Luka Doncic',
      points: 33,
      rebounds: 6,
      assists: 9,
      steals: 1,
      blocks: 1
    },
    { 
      id: 7,
      playerName: 'James Harden',
      points: 29,
      rebounds: 5,
      assists: 12,
      steals: 3,
      blocks: 0
    },
    { 
      id: 8,
      playerName: 'Damian Lillard',
      points: 32,
      rebounds: 4,
      assists: 10,
      steals: 2,
      blocks: 0
    },
    { 
      id: 9,
      playerName: 'Joel Embiid',
      points: 27,
      rebounds: 13,
      assists: 4,
      steals: 1,
      blocks: 3
    },
    { 
      id: 10,
      playerName: 'Nikola Jokic',
      points: 28,
      rebounds: 11,
      assists: 9,
      steals: 2,
      blocks: 1
    },
    // ... d'autres joueurs
  ];

  return (
    <div id='body'>
    <img src={logo} alt="" width={200} height={200}></img>
      <h2>Statistiques des joueurs NBA</h2>

      <table className="tableStyle">
        <thead>
          <tr>
            <th>Joueur</th>
            <th>Points</th>
            <th>Rebonds</th>
            <th>Assists</th>
            <th>Steals</th>
            <th>Blocks</th>
          </tr>
        </thead>
        <tbody>
          {playerStats.map((player) => (
            <tr key={player.id}>
              <td>{player.playerName}</td>
              <td>{player.points}</td>
              <td>{player.rebounds}</td>
              <td>{player.assists}</td>
              <td>{player.steals}</td>
              <td>{player.blocks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
