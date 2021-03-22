import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DESIGN_AREA } from '../constants/appConstants';
import { setDesignArea } from '../store/actions/actions_app';
import Drapes from './Drapes'

const Wall = () => {
    const wallTheme = useSelector(state => state.app.wallTheme);
    const dispatch = useDispatch();

    return (
        <div className={`wall ${wallTheme}`} onClick={() => dispatch(setDesignArea(DESIGN_AREA.WALL))}>
            <Drapes />
            <h2>Wall  </h2>
        </div>
    )
}

export default Wall
