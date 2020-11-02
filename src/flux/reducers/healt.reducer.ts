import {
  HEALT_START,
  HEALT_SUCCESS,
  HEALT_ERROR
} from '../../contants/healt.constant'

import {ActionHealtType, HealtState} from '../../types/flux/healt.type'

const initialState: HealtState = {
  healt: null,
  loandingHealt: false,
  errorHealt: null
}

export default function(state: HealtState = initialState, action: ActionHealtType){
  switch (action.type) {
    case HEALT_START:
      return {...state,  loandingHealt: true, healt: null}
    case HEALT_SUCCESS:
          return {...state,  healt: 'OK', loandingHealt: false}
    case HEALT_ERROR:
        return {...state,  errorHealt: 'ERROR', loandingHealt: false};
    default:
      return state
  }
}