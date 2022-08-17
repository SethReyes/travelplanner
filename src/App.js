import './data.json';
import Day from './components/Day';
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';



function App() {

  const [dayList, setDays] = useState([{dayID: uuidv4(), dayNum: 1}])

  function handleAddDay(e){
      const dayNum = dayList.length + 1;
      setDays((prevDays) => {
          return [...prevDays, {dayID: uuidv4(), dayNum: dayNum}];
      })
  }
  function handleRemoveDay(removedDayNum){
    setDays(dayList.filter(( _ , dayID ) => dayID !== removedDayNum))}

  return (
  <> 
    {dayList.map(day => {
        return (<Day key={day.dayID} dayNum={day.dayNum} remove={handleRemoveDay}/> )       
    })}
    <button onClick={handleAddDay}>Add New Day</button>
  </>
  )
}

export default App;
