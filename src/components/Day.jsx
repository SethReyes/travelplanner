import React, {useState, useRef, useEffect} from 'react';
import Location from './Location';
import { v4 as uuidv4 } from 'uuid';


function Day({location}){

    const [activitiesList, setActivities] = useState([""])

    const activityNameRef = useRef()
    function handleAddActivity(e){
        const name = activityNameRef.current.value;
        if (name==='') return 
        setActivities((prevActivities) => {
            return [...prevActivities, {id: uuidv4(), name: name}];
        })
        activityNameRef.current.value = null;
    } 
    return (
        location.map(eachActivity => {
            return (
                <>
                {/* <Day dayNum={ [1,2] }/> */}
                <Location activities={activitiesList} />
                <input ref={activityNameRef} type="text" />
                <button onClick={handleAddActivity}>Add New Activity</button>
            </>
                )
        })
    )
}


export default Day