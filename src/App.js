/*

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React from 'react';
import './App.css';
import Card from './Card'; 

function App() {


  const rooms = [
    {
      title: "Indian Room",
      description: "Less Crowded. No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/indian_room.png`, 
    },
    {
      title: "Chinese Room",
      description: "No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/chinese_room.png`, 
    },
    {
      title: "English Room",
      description: "No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/english_room.png`, 
    },
    
  ];


  return (
    <div className="App">
      <header className="App-header">
        <h1>LOCATION IDENTIFIER</h1>
      </header>
      <div className="App-body">
        <aside className="App-sidebar">
          <div className="Sidebar-section">
            <h2>OCCUPANCY</h2>
            <label htmlFor="empty">
              <input type="checkbox" id="empty" name="occupancy" value="empty" />
              Empty
            </label>
            <label htmlFor="1">
              <input type="checkbox" id="1" name="occupancy" value="1" />
              1
            </label>
            <label htmlFor="2">
              <input type="checkbox" id="2" name="occupancy" value="2" />
              2
            </label>
            <label htmlFor="3">
              <input type="checkbox" id="3" name="occupancy" value="3" />
              3
            </label>
            <label htmlFor="4+">
              <input type="checkbox" id="4+" name="occupancy" value="4+" />
              4+
            </label>

            <h2>AMENITIES</h2>
            <label htmlFor="whiteboard">
              <input type="checkbox" id="whiteboard" name="amenities" value="whiteboard" />
              WhiteBoard
            </label>
            <label htmlFor="monitor/tv_with_hdmi">
              <input type="checkbox" id="monitor/tv_with_hdmi" name="amenities" value="monitor/tv_with_hdmi" />
              Monitor/TV with HDMI
            </label>


            <h2>TABLES</h2>
            <label htmlFor="0_table">
              <input type="checkbox" id="0_table" name="tables" value="0_table" />
              0
            </label>
            <label htmlFor="1_table">
              <input type="checkbox" id="1_table" name="tables" value="1_table" />
              1
            </label>
            <label htmlFor="2_table">
              <input type="checkbox" id="2_table" name="tables" value="2_table" />
              2
            </label>
            <label htmlFor="3_table">
              <input type="checkbox" id="3+_table" name="tables" value="3+_table" />
              3+
            </label>


            <h2>TIME OF DAY</h2>
            <label htmlFor="9am-9pm">
              <input type="checkbox" id="9am-12pm" name="time_of_day" value="9am-12pm" />
              9am - 12pm
            </label>
            <label htmlFor="12pm-6pm">
              <input type="checkbox" id="12pm-6pm" name="time_of_day" value="12pm-6pm" />
              12pm - 6pm
            </label>
            <label htmlFor="6pm-9pm">
              <input type="checkbox" id="6pm-9pm" name="time_of_day" value="6pm-9pm" />
              6pm - 9pm
            </label>
            <label htmlFor="9pm-9am">
              <input type="checkbox" id="9pm-9am" name="time_of_day" value="9pm-9am" />
              9pm - 9am
            </label>


            <h2>LOCATIONS</h2>
            <label htmlFor="cathy">
              <input type="checkbox" id="cathy" name="occupancy" value="cathy" />
              Cathy
            </label>
            <label htmlFor="wpu">
              <input type="checkbox" id="wpu" name="occupancy" value="wpu" />
              WPU
            </label>
            <label htmlFor="hillman-library">
              <input type="checkbox" id="hillman-library" name="occupancy" value="hillman-library" />
              Hillman Library
            </label>
            <label htmlFor="mervis-hall">
              <input type="checkbox" id="mervis-hall" name="occupancy" value="mervis-hall" />
              Mervis Hall
            </label>
            <label htmlFor="benedum-hall">
              <input type="checkbox" id="benedum-hall" name="occupancy" value="benedum-hall" />
              Benedum Hall
            </label>

            <button type="submit">Submit</button>
          </div>
          {/* You can add more sidebar sections here */}
        </aside>
        <main className="App-main">
          {/* Room cards will be displayed here */}
          {rooms.map((room, index) => (
            <Card
              key={index}
              title={room.title}
              description={room.description}
              imageUrl={room.imageUrl}
            />
          ))}
        </main>
      </div>
    </div>




  );
}

export default App;

/*
Here's a preliminary list of features to consider for the filters:
Occupancy
empty, 1, 2, 3, 4+
Whiteboard
number of tables
0, 1, 2, 3+
Monitor/TV with HDMI
Time of Day (will be dependent on building)
*/