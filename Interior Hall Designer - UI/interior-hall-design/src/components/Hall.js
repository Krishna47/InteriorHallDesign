import React from 'react'
import Couch from './Couch'
import Floor from './Floor'
import Wall from './Wall'
import "../styles/hall.scss";

const Hall = () => {

    return (
        <div className='hall'>
            <Wall />
            <Couch />
            <Floor />
        </div>
    )
}

export default Hall
