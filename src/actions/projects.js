import axios from 'axios';

export function projectsHasErrored(bool) {
    return {
        type: 'PROJECTS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function projectsIsLoading(bool) {
    return {
        type: 'PROJECTS_IS_LOADING',
        isLoading: bool
    };
}

export function projectsFetchDataSuccess(projects) {
    return {
        type: 'PROJECTS_FETCH_DATA_SUCCESS',
        projects
    };
}

export function projectsFetchData(url) {
    return (dispatch) => {
        dispatch(projectsIsLoading(true));

        axios.get(url, {
              headers: { 'Accept': 'application/json' },
              auth :{ username: 'Harinder', password: '@Harinder' }
            })
            .then((response) => {
                console.log(response.data.projects);
                dispatch(projectsIsLoading(false));
                dispatch(projectsFetchDataSuccess(response.data.projects))
            })
            .catch((error) => {
              console.log(error);
              dispatch(projectsHasErrored(true))
            });
    };
}
