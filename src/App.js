import './data.json';
import Day from './components/Day';
import React, {useState, useRef, useEffect} from 'react';
import Location from './components/Location';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [dayList, setDays] = useState([])
  const dayNameRef = useRef()

  function handleAddDay(e){
      const dayNum = dayList.length + 1;
      setDays((prevDays) => {
          return [...prevDays, {dayID: uuidv4(), dayNum: dayNum}];
      })
      dayNameRef.current.value = null;
  }
  return (
  <> 
    {dayList.map(day => { console.log(day);
        return (<Day key={day.dayID} dayNum={day.dayNum} /> )       
    })}
    <button onClick={handleAddDay}>Add New Day</button>
    </>
  )
}

export default App;
