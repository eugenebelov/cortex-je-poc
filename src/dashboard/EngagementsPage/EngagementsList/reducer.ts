export const INITTIAL_STATE = [];

export default (state = INITTIAL_STATE, action: any) => {
  switch (action.type) {
    case "TEST1":
      return [{ value: "I have data from test 1" }];
    case "TEST2":
      return [{ value: "You have data from test 2" }];
    default:
      return state;
  }
};
