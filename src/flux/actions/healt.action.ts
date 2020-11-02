import {
  HEALT_START,
  HEALT_SUCCESS,
  HEALT_ERROR
} from '../../contants/healt.constant'

import {ActionHealtType, HealtState} from '../../types/flux/healt.type'

const startHealt = () => {
  return {type: HEALT_START}
}

const successHealt = () => {
  return {type: HEALT_SUCCESS}
}

const errorHealt = () => {
  return {type: HEALT_ERROR}
}

export const healtAction = () =>{
  return (dispatch: any) => {
    try {
      dispatch( startHealt() )
      dispatch( successHealt() )
    } catch (error) {
      dispatch( errorHealt() )
    }
  }
}