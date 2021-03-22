import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DESIGN_AREA } from '../constants/appConstants';
import { setDesignArea } from '../store/actions/actions_app';

const Couch = () => {
    const couchTheme = useSelector(state => state.app.couchTheme);
    const dispatch = useDispatch();

    return (
        <>
            <div className={`couch ${couchTheme}`}
                onClick={() => dispatch(setDesignArea(DESIGN_AREA.COUCH))}>
                <h2
                >Couch  </h2>
            </div>

        </>
    )
}

export default Couch
