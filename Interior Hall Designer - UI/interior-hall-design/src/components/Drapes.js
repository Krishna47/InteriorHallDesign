import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DESIGN_AREA } from '../constants/appConstants';
import { setDesignArea } from '../store/actions/actions_app';

const Drapes = () => {
    const drapesTheme = useSelector(state => state.app.drapesTheme);
    const dispatch = useDispatch();

    const handleClick = (evt) => {
        evt.stopPropagation();
        dispatch(setDesignArea(DESIGN_AREA.DRAPES))
    }

    return (
        <div className={`drapes ${drapesTheme}`} onClick={handleClick}>
            <h2>Drapes  </h2>
        </div>
    )
}

export default Drapes
