
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RoomPage.css';
import Chart from 'chart.js/auto';

const Ballroom = () => {
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
        <h1 className="room-title">PATIO AND LAWN</h1>
        <h2 className="room-subtitle">Ground Floor William Pitt Union</h2>
        <p className="room-timings">TIMINGS: 9AM - 9PM</p>
        <p className="room-description">No sensors present.</p>
        <p className="indian-room-description">
        
        </p>
        {/* Include canvas element for chart */}
        <div className="chart-container">
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
      </div>
      <img
        className="room-image"
        src={`${process.env.PUBLIC_URL}/photos/ballroom.png`} 
        alt="Indian Room"
      />
    
    </div>
  );
};

export default Ballroom;
