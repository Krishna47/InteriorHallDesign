import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DESIGN_AREA } from '../constants/appConstants';
import { setDesignArea } from '../store/actions/actions_app';

const Floor = () => {
    const floorTheme = useSelector(state => state.app.floorTheme);
    const dispatch = useDispatch();

    return (
        <div className={`floor ${floorTheme}`} onClick={() => dispatch(setDesignArea(DESIGN_AREA.FLOOR))}>
            <h2>Floor  </h2>
        </div>
    )
}

export default Floor
