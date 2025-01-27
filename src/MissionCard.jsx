import './MissionCard.css'; // Import the styles specific to this component

function MissionCard({ name, status, crew }) {
  return (
    <div className="mission-card">
      {/* Display the mission name */}
      <h2>{name}</h2>
      {/* Display the mission status */}
      <p>Status: {status}</p>
      {/* Display the mission crew as a comma-separated string */}
      <p>Crew: {crew.join(', ')}</p>
    </div>
  );
}

export default MissionCard;
