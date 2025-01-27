import { useState } from 'react';
import MissionCard from './MissionCard'; // Component for displaying mission details
import MissionAction from './MissionAction'; // Component for mission action buttons
import MissionFilter from './MissionFilter'; // Component for filtering missions

function MissionControl({ missions }) {
  // State to store the full mission list
  const [missionList, setMissionList] = useState(missions);

  // State to store the current filter value ('All', 'Planned', 'Active', 'Completed')
  const [filter, setFilter] = useState('All');

  // Filter the missions based on the current filter state
  const filteredMissions = missionList.filter((mission) => {
    if (filter === 'All') return true; // If the filter is 'All', include all missions
    return mission.status === filter; // Otherwise, only include missions that match the filter
  });

  // Function to update the status of a specific mission
  const updateMissionStatus = (id, newStatus) => {
    // Update the missionList state by creating a new array
    setMissionList((prevMissions) => {
      return prevMissions.map((mission) => {
        // If the mission ID matches the one being updated, return a new object with the updated status
        if (mission.id === id) {
          return { ...mission, status: newStatus };
        }
        // Otherwise, return the mission as is
        return mission;
      });
    });
  };

  return (
    <div>
      {/* Page Title */}
      <h1>Space Mission Control</h1>

      {/* Display the number of missions being managed (filtered based on the current filter) */}
      <p>We are managing {filteredMissions.length} missions!</p>

      {/* Render the MissionFilter component and pass the setFilter function as a prop */}
      <MissionFilter setFilter={setFilter} />

      {/* Render the list of filtered missions */}
      <div>
        {filteredMissions.map((mission) => (
          <div key={mission.id}>
            {/* Render the MissionCard component for each mission */}
            <MissionCard
              name={mission.name}
              status={mission.status}
              crew={mission.crew}
            />
            {/* Render the MissionAction component and pass the updateMissionStatus function */}
            <MissionAction id={mission.id} onUpdate={updateMissionStatus} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionControl;
