import React, {useState, useRef} from 'react';
import Activity from './Activity'
import { v4 as uuidv4 } from 'uuid';
import { ActivityContainer } from './styledComps/activityContainer.styled'


export default function Location({location, setLocations, locList, locID, dayNum, setAll}) {

  const [activityList, setActivities] = useState([])
  const [show, setShow] = useState(false);
  function toggleEdit() {
    setShow(!show);
  }
  const activityNameRef = useRef();
  const locationNameRef = useRef();
  function handleAddActivity(e){
      const activeName = activityNameRef.current.value;
      if (activeName==='') return 
      setActivities((prevActivities) => {
          return [...prevActivities, {actID: uuidv4(), actName: activeName, description: ""}];
      })
      
      activityNameRef.current.value = null;
  }

  function handleEdit() {
    const newLocName = locationNameRef.current.value;
    toggleEdit();
    if (newLocName==='') return
    setLocations((prevList) => {
      return [...prevList].map((loc) => {
        if (loc.locID === locID) {
          return { ...loc, locName: newLocName };
        }
        return loc;
      });
    });
  }

  function handleRemoveLocation(){
    setLocations([...locList]
        .filter((locat) => locat.locID !== locID));
    }
  
  return (
  <>
  <div>
    <span hidden={show}>{location} </span>
    <button onClick={toggleEdit} hidden={show}> Edit </button>
    <input ref={locationNameRef} type="text" defaultValue={location} hidden={!show}></input>
    <button onClick={handleEdit} hidden={!show}> Update </button>
    <button onClick={handleRemoveLocation}>Remove Location</button>
  </div>
  <ActivityContainer> 
    {activityList.map(activ => {
        return (<Activity key={activ.actID} actID={activ.actID} activity={activ} actList={activityList} setActivities={setActivities} location={location} setAll={setAll} dayNum={dayNum}/> )       
    })}
    <input ref={activityNameRef} type="text" placeholder="New Activity"/>
    <button onClick={handleAddActivity} >Add New Activity</button>
    </ActivityContainer>
    </>
  )
}
