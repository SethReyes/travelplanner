import React, {useState, useRef} from 'react';
import Location from './Location'
import { v4 as uuidv4 } from 'uuid';
import { DayContainer, LocationContainer } from './styledComps/dayContainer.styled'

function Day({dayNum, dayList, setDays, dayID}){

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

    function handleRemoveDay(){
        setDays([...dayList]
            .filter((day) => day.dayID !== dayID)
            .map(({dayNum,...tempDayList},index)=>({...tempDayList, dayNum:index+1})));
        }

    return (
    <DayContainer>
        <div>
            Day {dayNum}
            <button onClick={handleRemoveDay}>Remove Day</button> 
        </div>
        <LocationContainer>
            {locationList.map(loc => { console.log(loc);
                return (<Location key={loc.locID} location={loc.locName} /> )       
            })}
            <input ref={locationNameRef} type="text" placeholder="New Location"/>
            <button onClick={handleAddLocation}>Add New Location</button>
        </LocationContainer>
    </DayContainer>
    )
  }


export default Day