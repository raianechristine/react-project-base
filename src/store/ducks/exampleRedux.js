import { createActions, createReducer } from "reduxsauce";

export const { Types: ExampleTypes, Creators: ExampleActions } = createActions({
  example: ["payload"],
  exampleSuccess: ["response"],
  exampleFailure: ["errors"],
});

export const INITIAL_STATE = {
  isLoading: false,
  isSuccess: false,
  data: [],
  errors: [],
};

const example = (state) => ({
  ...state,
  isLoading: true,
});

const exampleSuccess = (state, { response }) => ({
  ...state,
  isLoading: false,
  isSuccess: true,
  data: response,
});

const exampleFailure = (state, { errors }) => ({
  ...state,
  isLoading: false,
  isSuccess: false,
  errors,
});

export default createReducer(INITIAL_STATE, {
  [ExampleTypes.EXAMPLE]: example,
  [ExampleTypes.EXAMPLE_SUCCESS]: exampleSuccess,
  [ExampleTypes.EXAMPLE_FAILURE]: exampleFailure,
});
