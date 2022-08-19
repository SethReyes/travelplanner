import './data.json';
import Day from './components/Day';
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AddButton } from "./components/styledComps/AddButton.styled"



function App() {

  const [dayList, setDays] = useState([{dayID: uuidv4(), dayNum: 1}])

  function handleAddDay(e){
      const dayNum = dayList.length + 1;
      setDays((prevDays) => {
          return [...prevDays, {dayID: uuidv4(), dayNum: dayNum}];
      })
  }

    return (
  <> 
    {dayList.map(day => {
        return (<Day key={day.dayID} dayID={day.dayID} dayNum={day.dayNum} dayList={dayList} setDays={setDays}/> )       
    })}
    <AddButton onClick={handleAddDay}>+</AddButton>
  </>
  )
}

export default App;
