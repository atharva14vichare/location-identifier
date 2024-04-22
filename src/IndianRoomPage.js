/*
function IndianRoomPage() {
  return (
    <div>
      <h1>Indian Room</h1>
      {/* Add content specific to the Indian Room here }
    </div>
  );
}

export default IndianRoomPage;



const IndianRoomCard = ({ title, imageUrl }) => {
  return (
    <Link to="/indian-room">
      <div className="card">
        <img src={imageUrl} alt={title} />
        <div>{title}</div>
      </div>
    </Link>
  );
};

export default IndianRoomCard;



function IndianRoomPage() {
  console.log("Rendering IndianRoomPage");
  return (
    <div style={{ color: 'red', fontSize: '24px' }}>This is the Indian Room Page.</div>
  );
}

export default IndianRoomPage;




import React from 'react';
import { Link } from 'react-router-dom';
import './RoomPage.css';


const IndianRoomPage = () => {
  return (
    <div className="room-container">
      <div className="room-content">
        <h1 className="room-title">INDIAN ROOM</h1>
        <h2 className="room-subtitle">Third Floor Cathedral of Learning</h2>
        <p className="room-timings">TIMINGS: 9AM - 8PM</p>
        <p className="room-description">Less Crowded.<br />No sensors present.</p>
        <p className="indian-room-description">
          The Indian Room is another Nationality Room based upon a classroom in the home country. It is based upon the ancient Buddhist university known as Nalanda. The seating is arranged to show an open-air layout, at which several such spaces abutted each other.
        </p>
      </div>
      <img
        className="room-image"
        src={`${process.env.PUBLIC_URL}/photos/indian_room.png`} // Replace with the path to your image
        alt="Indian Room"
      />
    </div>
  );
};

export default IndianRoomPage;
*/
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RoomPage.css';
import Chart from 'chart.js/auto';

const IndianRoomPage = () => {
  const chartRef = useRef(null); 
  const chartInstance = useRef(null); 

  useEffect(() => {
    const chartConfig = {
      type: 'line',
      data: {
        labels: ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM", "12AM"],
        datasets: [{
          label: 'Room Occupancy (%)',
          data: [0, 20, 80, 100, 60, 60, 0], // Replace with percentage data
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.4
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100, 
            ticks: {
              // Include a sign in the ticks
              callback: function(value, index, values) {
                return value + '%';
              }
            }
          },
          x: {
            grid: {
              display: false  // This hides the vertical grid lines
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false  // This hides the horizontal grid lines
            }
          }
        }
      }
    };

    const myChartRef = chartRef.current.getContext('2d');
    const myChart = new Chart(myChartRef, chartConfig);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="room-container">
      <div className="room-content">
        <h1 className="room-title">INDIAN ROOM</h1>
        <h2 className="room-subtitle">Third Floor Cathedral of Learning</h2>
        <p className="room-timings">TIMINGS: 9AM - 8PM</p>
        <p className="room-description">Less Crowded.<br />No sensors present.</p>
        <p className="indian-room-description">
          The Indian Room is another Nationality Room based upon a classroom in the home country. It is based upon the ancient Buddhist university known as Nalanda. The seating is arranged to show an open-air layout, at which several such spaces abutted each other.
        </p>
        {/* Include canvas element for chart */}
        <div className="chart-container">
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
      </div>
      <img
        className="room-image"
        src={`${process.env.PUBLIC_URL}/photos/indian_room.png`} 
        alt="Indian Room"
      />
    
    </div>
  );
};

export default IndianRoomPage;
