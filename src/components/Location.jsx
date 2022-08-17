import React, {useState, useRef} from 'react';
import Activity from './Activity'
import { v4 as uuidv4 } from 'uuid';


export default function Location({location}) {

  const [activityList, setActivities] = useState([])
  const activityNameRef = useRef()

  function handleAddActivity(e){
      const activeName = activityNameRef.current.value;
      if (activeName==='') return 
      setActivities((prevActivities) => {
          return [...prevActivities, {actID: uuidv4(), actName: activeName}];
      })
      activityNameRef.current.value = null;
  }
  return (
  <div> 
    <div>{location}</div>
    
    {activityList.map(activ => {
        return (<Activity key={activ.actID} activity={activ} /> )       
    })}
    <input ref={activityNameRef} type="text" />
    <button onClick={handleAddActivity}>Add New Activity</button>
    </div>
  )
}
