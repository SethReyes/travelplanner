import React, {useState, useRef} from 'react';
import Location from './Location'
import { v4 as uuidv4 } from 'uuid';

function Day({dayNum, handleRemoveDay, key}){

    const [locationList, setLocations] = useState([])
    const locationNameRef = useRef()
  
    function handleAddLocation(e){
        const activeName = locationNameRef.current.value;
        if (activeName==='') return 
        setLocations((prevLoc) => {
            return [...prevLoc, {locID: uuidv4(), locName: activeName}];
        })
        locationNameRef.current.value = null;
    }
    return (
    <div>
        <div>
            Day {dayNum}
            <button onClick={handleRemoveDay(key)}>Remove Day</button> 
        </div>
      {locationList.map(loc => { console.log(loc);
          return (<Location key={loc.locID} location={loc.locName} /> )       
      })}
      <input ref={locationNameRef} type="text" />
      <button onClick={handleAddLocation}>Add New Location</button>
      </div>
    )
  }


export default Day