import {ADD_VILLAIN, ARREST_VILLAIN} from '../actionTypes'

export function addVillain(villianObj){
    return {
        type: ADD_VILLAIN,
        payload: villianObj
    }
}
export function arrestVillain(villianObj){
    return {
        type: ARREST_VILLAIN,
        payload: villianObj
    }
}

