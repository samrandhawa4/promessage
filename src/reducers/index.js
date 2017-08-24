import { combineReducers } from 'redux';
import { projects, projectsHasErrored, projectsIsLoading } from './Projects';
export default combineReducers({
    projects,
    projectsHasErrored,
    projectsIsLoading
});
