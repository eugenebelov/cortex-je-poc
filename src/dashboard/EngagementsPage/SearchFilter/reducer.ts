export const INITTIAL_STATE = { value: "test" };

export default (state = INITTIAL_STATE, action: any) => {
  switch (action.type) {
    case "TEST1":
      return { value: "I have test 1" };
    case "TEST2":
      return { value: "You have test 2" };
    default:
      return state;
  }
};
