import './MissionFilter.css'; // Import the styles specific to this component

function MissionFilter({ setFilter }) {
  return (
    <div className="filter-buttons">
      {/* Button to show all missions */}
      <button onClick={() => setFilter('All')}>All</button>
      {/* Button to filter missions with the status 'Planned' */}
      <button onClick={() => setFilter('Planned')}>Planned</button>
      {/* Button to filter missions with the status 'Active' */}
      <button onClick={() => setFilter('Active')}>Active</button>
      {/* Button to filter missions with the status 'Completed' */}
      <button onClick={() => setFilter('Completed')}>Completed</button>
    </div>
  );
}

export default MissionFilter;
