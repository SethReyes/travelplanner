import React from 'react';
import Location from './Location'

function Day({location}){

      //const [dayPlan, setdayPlan] = useState({id: 1, })

    //const testlocation=[1,2,3]
      
    return (
        location.map(location => {
            return (
                <>
                    <Location key={location.id} location={location} />
                    <input type="text" />
                    <button>Add Location</button>
                </>)
        })
    )
}


export default Day