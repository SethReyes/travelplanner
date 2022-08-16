import './data.json';
import Day from './components/Day';
import React, {useState, useRef, useEffect} from 'react';
//import Location from './components/Location';
import { v4 as uuidv4 } from 'uuid';



function App() {

  // const [dayNum, setDayNum] = useState([]);
  //const dayNumRef = useRef();

  const [locationList, setLocations] = useState([{id: 1, locationName: "Brazil"}])
  const locationNameRef = useRef()

  function handleAddLocation(e){
      const locName = locationNameRef.current.value;
      if (locName==='') return 
      setLocations((prevLocations) => {
          return [...prevLocations, {id: uuidv4(), locationName: locName}];
      })
      locationNameRef.current.value = null;
  }
  return (
    <>
        {/* <Day dayNum={ [1,2] }/> */}
        <Day locations={locationList} />
        <input ref={locationNameRef} type="text" />
        <button onClick={handleAddLocation}>Add New Location</button>
    </>
  );
}

export default App;
