import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DESIGN_AREA, THEMES } from '../../constants/appConstants'
import { setCouchTheme, setDrapesTheme, setFloorTheme, setWallTheme } from '../../store/actions/actions_app';

const ThemePicker = () => {
  const dispatch = useDispatch();
  const { designArea, wallTheme, couchTheme, drapesTheme, floorTheme } = useSelector(state => state.app);
  let designAreaTheme='';

  switch (designArea) {
    case DESIGN_AREA.COUCH:
      designAreaTheme = couchTheme
      break;
    case DESIGN_AREA.DRAPES:
      designAreaTheme = drapesTheme
      break;
    case DESIGN_AREA.FLOOR:
      designAreaTheme = floorTheme
      break;
    case DESIGN_AREA.WALL:
      designAreaTheme = wallTheme
      break;

    default:
      break;

  }


  const setTheme = (evt) => {
    const selectedTheme = evt.target.value;


    switch (designArea) {
      case DESIGN_AREA.COUCH:
        dispatch(setCouchTheme(selectedTheme));
        break;
      case DESIGN_AREA.DRAPES:
        dispatch(setDrapesTheme(selectedTheme));
        break;
      case DESIGN_AREA.FLOOR:
        dispatch(setFloorTheme(selectedTheme));
        break;
      case DESIGN_AREA.WALL:
        dispatch(setWallTheme(selectedTheme));
        break;

      default:
        break;
    }
  }

  return (
    <div className="themePicker">
      <p>Select theme for <b>{designArea}</b></p>
      <RadioGroup name="theme" onChange={setTheme} value={designAreaTheme}>
        {THEMES.map(theme => <FormControlLabel key={theme.value} value={theme.value} control={<Radio />} label={theme.label} />)}

      </RadioGroup>

    </div>
  )
}

export default ThemePicker
