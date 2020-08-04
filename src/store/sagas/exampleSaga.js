import { put, takeLatest } from "redux-saga/effects";

import { API } from "services/api";
import { ExampleTypes, ExampleActions } from "store/ducks/exampleRedux";
import { POST } from "utils/constants/verbs";
import { ENDPOINT_EXAMPLE } from "utils/constants/endpoints";

export function* watchSagas() {
  yield takeLatest(ExampleTypes.EXAMPLE, sagaExample);
}

export function* sagaExample({ payload }) {
  try {
    const { data } = yield API({
      method: POST,
      url: ENDPOINT_EXAMPLE,
      data: payload,
    });
    yield put(ExampleActions.exampleSuccess(data));
  } catch (error) {
    yield put(ExampleActions.exampleFailure(error));
  }
}
