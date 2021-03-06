import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "change_name":
      return { ...state, name: action.payload };

    default:
      return state;
  }
};
const changeName = (dispatch) => (name) => {
  dispatch({ action: "change_name", payload: name });
};
const startRecording = (dispatch) => () => {
  dispatch({ action: "start_recording" });
  console.log("start_recording");

};
const stopRecording = (dispatch) => () => {
  dispatch({ action: "stop_recording" });
  console.log("stop_recording");
};
const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: "add_current_location", payload: location });
  if (recording) {
    dispatch({ action: "add_location", payload: location });
    console.log("recording");
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName },
  {name:'', recording: false, locations: [], currentLocation: null }
);
