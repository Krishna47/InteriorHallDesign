import React from 'react'
import Couch from './Couch'
import Drapes from './Drapes'
import Floor from './Floor'
import Wall from './Wall'

const Hall = () => {
    return (
        <div>
            <Wall/>
            <Drapes/>
            <Couch/>
            <Floor/>
        </div>
    )
}

export default Hall
