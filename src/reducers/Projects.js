export function projectsHasErrored(state = false, action) {
    switch (action.type) {
        case 'PROJECTS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function projectsIsLoading(state = false, action) {
    switch (action.type) {
        case 'PROJECTS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function projects(state = [], action) {
    switch (action.type) {
        case 'PROJECTS_FETCH_DATA_SUCCESS':
            return action.projects;
        default:
            return state;
    }
}
