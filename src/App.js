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

import React, { useState } from 'react'; 
import './App.css';
import Card from './Card'; 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndianRoomPage from './IndianRoomPage'; 
import EnglishRoomPage from './EnglishRoomPage'; 
import ChineseRoomPage from './ChineseRoomPage'; 
import Patiolawn from './Patiolawn';
import Lowerlounge from './Lowerlounge';
import Ballroom from './Ballroom';
import HL317 from './HL317';
import HL210 from './HL210';
import HL412 from './HL412';

function App() {

/*
  const rooms = [
    {
      title: "Indian Room",
      //description: "Less Crowded. No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/indian_room.png`, // Replace with your image path
      linkUrl: "/indian-room",
    },
    {
      title: "Chinese Room",
      //description: "No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/chinese_room.png`, // Replace with your image path
      linkUrl: "/chinese-room",
    },
    {
      title: "English Room",
      //description: "No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/english_room.png`, // Replace with your image path
      linkUrl: "/english-room",
    },
    {
      title: "Patio and Lawn",
      //description: "No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/patiolawn.png`, // Replace with your image path
      linkUrl: "/patio-lawn",
    },
    {
      title: "Lower Lounge",
      //description: "No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/lowerlounge.png`, 
      linkUrl: "/lower-lounge",
    },
    {
      title: "Ballroom",
      //description: "No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/ballroom.png`, 
      linkUrl: "/ballroom",
    },
    {
      title: "317 HL",
      //description: "No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/hillman_3.png`, 
      linkUrl: "/317-hl",
    },
    {
      title: "210 HL",
      //description: "No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/hillman_2.png`, 
      linkUrl: "/210-hl",
    },
    {
      title: "412 HL",
      //description: "No Sensors present.",
      imageUrl: `${process.env.PUBLIC_URL}/photos/hillman_public.png`, 
      linkUrl: "/412-hl",
    },
    
    // Add more room data as needed
  ];*/


  const [selectedBuildings, setSelectedBuildings] = useState(new Set());
  const [displayedRooms, setDisplayedRooms] = useState([]);

  const rooms = [
    { title: "Indian Room", imageUrl: `${process.env.PUBLIC_URL}/photos/indian_room.png`, linkUrl: "/indian-room", building: 'Cathy' },
    { title: "Chinese Room", imageUrl: `${process.env.PUBLIC_URL}/photos/chinese_room.png`, linkUrl: "/chinese-room", building: 'Cathy' },
    { title: "English Room", imageUrl: `${process.env.PUBLIC_URL}/photos/english_room.png`, linkUrl: "/english-room", building: 'Cathy' },
    { title: "Patio and Lawn", imageUrl: `${process.env.PUBLIC_URL}/photos/patiolawn.png`, linkUrl: "/patio-lawn", building: 'WPU' },
    { title: "Lower Lounge", imageUrl: `${process.env.PUBLIC_URL}/photos/lowerlounge.png`, linkUrl: "/lower-lounge", building: 'WPU' },
    { title: "Ballroom", imageUrl: `${process.env.PUBLIC_URL}/photos/ballroom.png`, linkUrl: "/ballroom", building: 'WPU' },
    { title: "317 HL", imageUrl: `${process.env.PUBLIC_URL}/photos/hillman_3.png`, linkUrl: "/317-hl", building: 'Hillman Library' },
    { title: "210 HL", imageUrl: `${process.env.PUBLIC_URL}/photos/hillman_2.png`, linkUrl: "/210-hl", building: 'Hillman Library' },
    { title: "412 HL", imageUrl: `${process.env.PUBLIC_URL}/photos/hillman_public.png`, linkUrl: "/412-hl", building: 'Hillman Library' },
  ];
  
  const handleBuildingChange = (event) => {
    const building = event.target.name;
    const isChecked = event.target.checked;
    setSelectedBuildings(prev => {
      const updated = new Set(prev);
      if (isChecked) {
        updated.add(building);
      } else {
        updated.delete(building);
      }
      return updated;
    });
  };

  const handleSubmit = () => {
    const filteredRooms = rooms.filter(room => selectedBuildings.has(room.building));
    setDisplayedRooms(filteredRooms);
  };






  return (
    
      <div className="App">
      <header className="App-header">
        <h1>LOCATION IDENTIFIER</h1>
      </header>
      <div className="App-body">
        <aside className="App-sidebar">
          <div className="Sidebar-section">




          <h2>LOCATIONS</h2>
            <div>
              <label htmlFor="cathy">
                <input type="checkbox" id="cathy" name="Cathy" onChange={handleBuildingChange} />
                Cathy
              </label>
              <label htmlFor="wpu">
                <input type="checkbox" id="wpu" name="WPU" onChange={handleBuildingChange} />
                WPU
              </label>
              <label htmlFor="hillman-library">
                <input type="checkbox" id="hillman-library" name="Hillman Library" onChange={handleBuildingChange} />
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


            
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
          </aside>
          <main className="App-main">
            {/* Main content will change based on the route */}
            <Routes>
              <Route path="/" element={
              <div>
                {displayedRooms.length > 0 ? displayedRooms.map((room, index) => (
                  <Card
                    key={index}
                    title={room.title}
                    imageUrl={room.imageUrl}
                    linkUrl={room.linkUrl}
                  />
                )) : <p>No rooms available for the selected building.</p>}
              </div>
            } />
              <Route path="/indian-room" element={<IndianRoomPage />} />
              <Route path="/english-room" element={<EnglishRoomPage />} />
              <Route path="/chinese-room" element={<ChineseRoomPage />} />
              <Route path="/patio-lawn" element={<Patiolawn />} />
              <Route path="/ballroom" element={<Ballroom />} />
              <Route path="/lower-lounge" element={<Lowerlounge />} />
              <Route path="/317-hl" element={<HL317 />} />
              <Route path="/210-hl" element={<HL210 />} />
              <Route path="/412-hl" element={<HL412 />} />
            </Routes>
          </main>
        </div>
      </div>
  );
}

export default App;

/*
ere's a preliminary list of features to consider for the filters:
Occupancy
empty, 1, 2, 3, 4+
Whiteboard
number of tables
0, 1, 2, 3+
Monitor/TV with HDMI
Time of Day (will be dependent on building)
*/