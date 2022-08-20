import './data.json';
import Day from './components/Day';
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddButton } from "./components/styledComps/AddButton.styled"



function App() {

  const [dayList, setDays] = useState([{dayID: uuidv4(), dayNum: 1}])
  const [allActivites, setAll] = useState();
  function handleAddDay(e){
      const dayNum = dayList.length + 1;
      setDays((prevDays) => {
          return [...prevDays, {dayID: uuidv4(), dayNum: dayNum, date: "10/10/2022"}];
      })
  }

    return (
  <> 
    {dayList.map(day => {
        return (<Day key={day.dayID} dayID={day.dayID} dayNum={day.dayNum} dayList={dayList} setDays={setDays} setAll={setAll}/> )       
    })}
    <AddButton onClick={handleAddDay}>+</AddButton>
  </>
  )
}

export default App;
