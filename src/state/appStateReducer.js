import initialAppState from "./initialAppState";

const appStateReducer = (state, action) => {
  switch (action.type) {
   

    // case "NOTIF_START_USER_REGISTRATION": {
    //   return { ...state, message: messages.PROCESSING, processing: true };
    // }
   
   

    default:
      return state
    //   throw new Error();
  }
};
export default appStateReducer;