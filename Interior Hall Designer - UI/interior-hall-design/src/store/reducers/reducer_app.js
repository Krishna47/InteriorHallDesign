import { APP_ACTIONS, DESIGN_AREA } from "../../constants/appConstants"

const initialState = {
    wallTheme: '',
    couchTheme: '',
    drapesTheme: '',
    floorTheme: '',
    designArea: DESIGN_AREA.WALL
}

const appReducer = (state = initialState, { type, theme, payload }) => {
    switch (type) {

        case APP_ACTIONS.SET_WALL_THEME:
            const newWallState = { ...state, wallTheme: theme }
            localStorage.setItem('designerThemes', JSON.stringify(newWallState));
            return newWallState;

        case APP_ACTIONS.SET_FLOOR_THEME:
            const newFloorState = { ...state, floorTheme: theme }
            localStorage.setItem('designerThemes', JSON.stringify(newFloorState));
            return newFloorState;

        case APP_ACTIONS.SET_COUCH_THEME:
            const newCouchState = { ...state, couchTheme: theme }
            localStorage.setItem('designerThemes', JSON.stringify(newCouchState));
            return newCouchState;

        case APP_ACTIONS.SET_DRAPES_THEME:
            const newDrapesState = { ...state, drapesTheme: theme }
            localStorage.setItem('designerThemes', JSON.stringify(newDrapesState));
            return newDrapesState;

        case APP_ACTIONS.SET_DESIGN_AREA:
            const newDesignState = { ...state, designArea: payload }
            localStorage.setItem('designerThemes', JSON.stringify(newDesignState));
            return newDesignState;

        default:
            return state
    }
}


export default appReducer