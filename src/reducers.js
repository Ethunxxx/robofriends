import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'

const initialStateSearch = {
    searchField: ''
}
const initialStateRobots = {
    isPending: false,
    robots: [],
    error: false
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
}


export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true }
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, error: false, isPending: false }
        case REQUEST_ROBOTS_FAILED:
            return { ...state, robots: [], error: action.payload, isPending: false }
        default:
            return state;
    }
}