import './App.css'; // Import global styles
import MissionControl from './MissionControl'; // Import the MissionControl component

// Initial data for the list of missions
const missions = [
  { id: 1, name: 'Mars Rover', status: 'Planned', crew: ['Alice', 'Bob'] },
  { id: 2, name: 'Moon Base', status: 'Active', crew: ['Charlie', 'Dave'] },
  {
    id: 3,
    name: 'Venus Observatory',
    status: 'Planned',
    crew: ['Eve', 'Frank'],
  },
  {
    id: 4,
    name: 'Jupiter Moons Survey',
    status: 'Completed',
    crew: ['Grace', 'Hank'],
  },
  {
    id: 5,
    name: 'Asteroid Belt Mining',
    status: 'Active',
    crew: ['Ivy', 'John'],
  },
  {
    id: 6,
    name: 'Saturn Ring Research',
    status: 'Planned',
    crew: ['Karen', 'Leo'],
  },
  {
    id: 7,
    name: 'Deep Space Probe',
    status: 'Completed',
    crew: ['Mia', 'Nolan'],
  },
  {
    id: 8,
    name: 'Interstellar Observatory',
    status: 'Planned',
    crew: ['Olivia', 'Pete'],
  },
  {
    id: 9,
    name: 'Neptune Atmospheric Study',
    status: 'Active',
    crew: ['Quinn', 'Rachel'],
  },
  {
    id: 10,
    name: 'Pluto Reclamation',
    status: 'Planned',
    crew: ['Sam', 'Tina'],
  },
];

function App() {
  return (
    <div className="container">
      {/* Render the MissionControl component and pass the missions data */}
      <MissionControl missions={missions} />
    </div>
  );
}

export default App;
