import React from 'react'
import Activity from './Activity'


export default function Location( {activities}) {

  return activities.map(activ => {
        return <Activity key={activ.id} activity={activ} />        
    })
}
