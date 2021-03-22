import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';


export const createAppStore = () => {
  const designThemes = localStorage.getItem('designerThemes');
  const app = designThemes ? JSON.parse(designThemes) : {};
  let initialState={};
  initialState['app'] = app;
  const store = createStore(rootReducer, initialState);

  return store;
};
