import { ADD_MORIARTY_LOCATION } from '../actionTypes'

export const addMoriartyLocation = (locationObj) => {
    return {
        type: ADD_MORIARTY_LOCATION,
        payload: locationObj
    }
}