import './MissionAction.css'; // Import the styles specific to this component

function MissionAction({ id, onUpdate }) {
  return (
    <div className="action-buttons">
      {/* Button to update the mission status to 'In Progress' */}
      <button className="launch" onClick={() => onUpdate(id, 'In Progress')}>
        Launch
      </button>
      {/* Button to update the mission status to 'Completed' */}
      <button className="complete" onClick={() => onUpdate(id, 'Completed')}>
        Complete
      </button>
    </div>
  );
}

export default MissionAction;
