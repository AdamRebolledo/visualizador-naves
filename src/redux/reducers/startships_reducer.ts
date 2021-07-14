import { UPDATE_STARTSHIP } from '../actions/startships_actions';

const initialState = {
  startship: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action: any) {
  switch (action.type) {
    case UPDATE_STARTSHIP: {
      return {
        ...state,
        startship: action.payload
      }
    }

    default:
      return state;
  }
}