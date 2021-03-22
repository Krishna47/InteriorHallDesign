import { APP_ACTIONS } from "../../constants/appConstants";

export const setWallTheme = theme => {
    return {
      type: APP_ACTIONS.SET_WALL_THEME,
      theme
    };
  };

  export const setFloorTheme = theme => {
    return {
      type: APP_ACTIONS.SET_FLOOR_THEME,
      theme
    };
  };


  export const setCouchTheme = theme => {
    return {
      type: APP_ACTIONS.SET_COUCH_THEME,
      theme
    };
  };


  export const setDrapesTheme = theme => {
    return {
      type: APP_ACTIONS.SET_DRAPES_THEME,
      theme
    };
  };

  export const setDesignArea = area => {
    return {
      type: APP_ACTIONS.SET_DESIGN_AREA,
      payload:area
    };
  };