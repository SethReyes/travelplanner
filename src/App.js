import './data.json';
import Day from './components/Day';
import React, {useState, useRef, useEffect} from 'react';
//import Location from './components/Location';
import { v4 as uuidv4 } from 'uuid';



function App() {

  // const [dayNum, setDayNum] = useState([]);
  //const dayNumRef = useRef();

  const [locationList, setLocations] = useState([])
  const locationNameRef = useRef()

  function handleAddLocation(e){
      const name = locationNameRef.current.value;
      if (name==='') return 
      setLocations((prevLocations) => {
          return [...prevLocations, {id: uuidv4(), name: name}];
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
