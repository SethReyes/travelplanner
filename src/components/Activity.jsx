import React, { useState, useRef } from "react";
import { DescriptionContainer } from './styledComps/activityContainer.styled'

export default function Activity({ activity, actList, actID, setActivities, setAll, location, dayNum}) {
  const [show, setShow] = useState(false);
  const [dshow, setDShow] = useState(false);
  const [actDescription, setDescription] = useState(false);

  function toggleEdit() {
    setShow(!show);
  }
  function descToggleEdit() {
    setDShow(!dshow);
  }
  const activityNameRef = useRef()
  const descriptionRef = useRef()

  function handleEdit() {
    const newActName = activityNameRef.current.value;
    toggleEdit();
    if (newActName==='') return
    setActivities((prevList) => {
      return [...prevList].map((act) => {
        if (act.actID === actID) {
          return { ...act, actName: newActName };
        }
        return act;
      });
    });
  }
  function handleNewDescription() {
    const descrip = descriptionRef.current.value;
    descToggleEdit();
    if (descrip==='') return
    setDescription(descrip);};
  
  // function updateDB(){
  //   setAll((prevAll)=>{
  //     return [...prevAll, {dayNum: dayNum, location: location, activity: activity.actName, description: actDescription}]
  //   })
  // }
  
  function handleRemoveActivity() {
    setActivities([...actList].filter((act) => act.actID !== actID));
  }
  
  return (
    <div>
      <span hidden={show}>{activity.actName} </span>
      <button onClick={toggleEdit} hidden={show}> Edit </button>
      <input ref={activityNameRef} type="text" defaultValue={activity.actName} hidden={!show}></input>
      <button onClick={handleEdit} hidden={!show}> Update </button>
      <button onClick={handleRemoveActivity}> Remove Activity</button>
      <DescriptionContainer>
        <input ref={descriptionRef} type="text" placeholder="Enter Activity Description" hidden={dshow}></input>
        <span hidden={!dshow}>{actDescription} </span>
        <button onClick={handleNewDescription} hidden={dshow}> Update </button>
        <button onClick={handleNewDescription} hidden={!dshow}> Edit </button>
      </DescriptionContainer>
    </div>
  );
}
