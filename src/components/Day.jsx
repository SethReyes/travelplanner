import React, { useState, useRef } from "react";
import Location from "./Location";
import { v4 as uuidv4 } from "uuid";
import {
  DayContainer,
  LocationContainer,
} from "./styledComps/dayContainer.styled";

function Day({ dayNum, dayList, setDays, dayID, setAll, allList }) {
  const [locationList, setLocations] = useState([]);
  const locationNameRef = useRef();

  function handleAddLocation(e) {
    e.preventDefault();
    const activeName = locationNameRef.current.value;
    if (activeName === "") return;
    setLocations((prevLoc) => {
      return [...prevLoc, { locID: uuidv4(), locName: activeName }];
    });
    locationNameRef.current.value = null;
  }

  function handleRemoveDay() {
    setDays(
      [...dayList]
        .filter((day) => day.dayID !== dayID)
        .map(({ dayNum, ...tempDayList }, index) => ({
          ...tempDayList,
          dayNum: index + 1,
        }))
    );
  }

  return (
    <DayContainer>
      <span>Day {dayNum}</span>
      <button onClick={handleRemoveDay}> Remove Day</button>
      <LocationContainer>
        {locationList.map((loc) => {
          return (
            <Location
              key={loc.locID}
              locID={loc.locID}
              location={loc.locName}
              setLocations={setLocations}
              locList={locationList}
              dayNum={dayNum}
              setAll={setAll}
              allList={allList}
            />
          );
        })}
        <input ref={locationNameRef} type="text" placeholder="New Location" />
        <button onClick={handleAddLocation}>Add New Location</button>
      </LocationContainer>
    </DayContainer>
  );
}

export default Day;
